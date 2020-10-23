// Get the records from the filter items
const moment = require("moment");

exports.getFilterItems = async (req, res) => {
  // Validate Request
  let response = { code: 1, msg: "", records: [] };
  const { startDate, endDate, minCount, maxCount } = req.query;

  if (!startDate) {
    response.msg = "startDate is required";
    return res.status(400).send(response);
  }

  if (!endDate) {
    response.msg = "endDate is required";
    return res.status(400).send(response);
  }

  if (!minCount) {
    response.msg = "minCount is required";
    return res.status(400).send(response);
  }

  if (!maxCount) {
    response.msg = "maxCount is required";
    return res.status(400).send(response);
  }

  // Check if the date format is correct
  let regex = new RegExp("[0-9]{4}(-)[0-9]{2}(-)[0-9]{2}");
  if (!regex.test(startDate)) {
    response.msg = "startDate must be in format YYYY-MM-DD(e.g 2020-10-21)";
    return res.status(400).send(response);
  }

  if (!regex.test(endDate)) {
    response.msg = "endDate must be in format YYYY-MM-DD(e.g 2020-10-26)";
    return res.status(400).send(response);
  }

  if (parseInt(minCount) > parseInt(maxCount)) {
    response.msg = "minCount should be less than maxCount";
    return res.status(400).send(response);
  }

  const records = require("../models/getr");

  records
    .aggregate([
      {
        $match: {
          createdAt: {
            $gte: moment(startDate).startOf("day").toDate(),
            $lte: moment(endDate).endOf("day").toDate(),
          },
        },
      },
      {
        $project: {
          _id: 0,
          key: "$key",
          createdAt: "$createdAt",
          totalCount: {
            $sum: "$counts",
          },
        },
      },
      {
        $match: {
          totalCount: {
            $gt: Number(minCount),
            $lt: Number(maxCount),
          },
        },
      },
    ])
    .exec((err, collection) => {
      if (err) {
        response.msg = err;
        return res.status(500).send(response);
      }
      response.code = 0;
      response.msg = "success";
      response.records = collection;
      console.log(response);
      res.status(200).send(response);
    });
};
