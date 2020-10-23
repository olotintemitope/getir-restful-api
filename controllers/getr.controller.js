// Get the records from the filter items
const moment = require('moment')

exports.getFilterItems = async (req, res) => {
  // Validate Request
  let response = {code: 1, records: [], msg: ''}

  if (undefined === req.query.startDate) {
    response.msg = 'startDate is required'
    return res.status(400).send(response);
  }

  if (undefined === req.query.endDate) {
    response.msg = 'endDate is required'
    return res.status(400).send(response);
  }

  if (undefined === req.query.minCount) {
    response.msg = 'minCount is required'
    return res.status(400).send(response);
  }

  if (undefined === req.query.maxCount) {
    response.msg = 'maxCount is required'
    return res.status(400).send(response);
  }

  const minCount = req.query.minCount;
  const maxCount = req.query.maxCount;
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;

  // Check if the date format is correct
  let regex = new RegExp('[0-9]{4}(-)[0-9]{2}(-)[0-9]{2}');
  if (!regex.test(startDate)) {
    response.msg = 'startDate must be in format YYYY-MM-DD(e.g 2020-10-21)'
    return res.status(400).send(response);
  }

  if (!regex.test(endDate)) {
    response.msg = 'endDate must be in format YYYY-MM-DD(e.g 2020-10-26)'
    return res.status(400).send(response);
  }

  if (parseInt(minCount) > parseInt(maxCount)) {
    response.msg = 'minCount should be less than maxCount'
    return res.status(400).send(response);
  }

  const records = require('../models/getr');
  //"createdAt": {"$gte": moment(startDate).startOf('day'), "$lt": moment(endDate).endOf('day')}

  /*await GetrModel.create({
    key: 'nxbxbxbxbxbx',
    value: 'kskksksksks',
    counts: [12],
  });*/

  /*records.find({
    "createdAt": {"$gte": moment(startDate).startOf('day'), "$lt": moment(endDate).endOf('day')},
    "counts": {"$gte": minCount, "$lt": maxCount}
  }).then(collection => {
    response.code = 0
    response.msg = "success"
    response.records = collection
    console.log(response);
    res.status(200).send(response)
  })
    .catch(err => {
      response.msg = err
      return res.status(500).send(response);
    });*/

  console.log( moment(startDate).startOf('day').toDate());

  records.aggregate([{
    $match:
     {
       createdAt: {"$gte": moment(startDate).startOf('day').toDate(), "$lte": moment(endDate).endOf('day').toDate()}
     }
  }
   // { $group: { _id: "$residentialLGA", total: { $sum: 1 } } }
  ]).exec((err, collection) => {
    if (err) {
      response.msg = err
      return res.status(500).send(response);
    }
    response.code = 0
    response.msg = "success"
    response.records = collection
    console.log(response);
    res.status(200).send(response)
  });
};