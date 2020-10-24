const request = require('supertest')
const mongoose = require('mongoose');
const mockingoose = require('mockingoose').default;

const moment = require("moment");

const RecordModel = require('../models/getir')
const BASE_URL = 'http://localhost:3000';
const dataFixtures = require('../__tests__/fixtures/stub')

beforeAll(done => {
  done()
})

afterAll(done => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close()
  done()
});

describe('Get records endpoint', () => {
  it('expects to see that the query has a start date', async () => {
    const res = await request(`${BASE_URL}`)
      .get('/api/records');

    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('msg')
    expect(res.body.msg).toEqual("startDate is required");
  });

  it('expects to see that the query has a end date', async () => {
    const res = await request(`${BASE_URL}`)
      .get('/api/records?startDate=2016-05-10');

    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('msg')
    expect(res.body.msg).toEqual("endDate is required");
  });

  it('expects to see that the query has a min count', async () => {
    const res = await request(`${BASE_URL}`)
      .get('/api/records?startDate=2016-05-10&endDate=2016-09-17');

    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('msg')
    expect(res.body.msg).toEqual("minCount is required");
  });

  it('expects to see that the query has a max count', async () => {
    const res = await request(`${BASE_URL}`)
      .get('/api/records?startDate=2016-05-10&endDate=2016-09-17&minCount=300');

    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('msg')
    expect(res.body.msg).toEqual("maxCount is required");
  });

  it('expects to see that the start date have a correct date format', async () => {
    const res = await request(`${BASE_URL}`)
      .get('/api/records?startDate=15-05-2010&endDate=2016-09-17&minCount=300&maxCount=500');

    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('msg')
    expect(res.body.msg).toEqual("startDate must be in format YYYY-MM-DD(e.g 2020-10-21)");
  });

  it('expects to see that the end date have a correct date format', async () => {
    const res = await request(`${BASE_URL}`)
      .get('/api/records?startDate=2020-05-20&endDate=16-09-2017&minCount=300&maxCount=500');

    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('msg')
    expect(res.body.msg).toEqual("endDate must be in format YYYY-MM-DD(e.g 2020-10-26)");
  });

  it('expects to see that the min count is less than the max count ', async () => {
    const res = await request(`${BASE_URL}`)
      .get('/api/records?startDate=2016-05-20&endDate=2017-09-17&minCount=500&maxCount=200');

    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('msg')
    expect(res.body.msg).toEqual("minCount should be less than maxCount");
  });

  it('mocks the mongo db records', async () => {
    let response = { code: 1, msg: "", records: [] };

    const startDate = '2015-06-03';
    const endDate = '2017-01-28';
    const minCount = 100;
    const maxCount = 500;

    mockingoose(RecordModel).toReturn(dataFixtures, 'aggregate');

    return RecordModel.aggregate([
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
        }

        expect(collection).toMatchObject(dataFixtures);
      });
  })
})