# Getr RESTFul API

### How to Install
- Clone `https://github.com/olotintemitope/getr-restful-api.git`
- Run `npm install`
- On your terminal checkout to main branch

### How to start the server on your local machine
- `npm run dev`
- Open your browser and go to `http://localhost:3000/`

### How to run producton build
- `npm run prod` This uses webpack to generate a single build file into the dist folder

### How to run the test
- `npm run test`

### Remote Server Address
- This app is hosted on heroku, and the url can be accessed via
https://getir-restful.herokuapp.com/

### API Endpoints
- We only have one endpoint which is
  - GET `api/records`
- Since this is a GET request, the filter parameters are appended to the endpoint like;
  - `?startDate=2016-05-10&endDate=2016-09-17&minCount=150&maxCount=500`
 
### Sample Request using local server
- `http://localhost:3000/api/records?startDate=2016-05-10&endDate=2016-09-17&minCount=300&maxCount=500`

### Sample Response
```
{
    "code": 0,
    "msg": "success",
    "records": [
        {
        "key": "GbAmjUNH",
        "createdAt": "2016-09-12T18:40:33.614Z",
        "totalCount": 406
        },
        {
        "key": "dBEekhmy",
        "createdAt": "2016-07-14T09:27:48.414Z",
        "totalCount": 417
        }
    ]
}
```


### Sample Request using the Heroku endpoint
- `https://getir-restful.herokuapp.com/api/records?startDate=2016-05-10&endDate=2016-09-17&minCount=150&maxCount=500`

### Sample Response
```
{
  "code": 0,
  "msg": "success",
  "records": [
      {
      "key": "AYnxgHrn",
      "createdAt": "2016-09-16T13:05:42.561Z",
      "totalCount": 163
      },
      {
      "key": "GbAmjUNH",
      "createdAt": "2016-09-12T18:40:33.614Z",
      "totalCount": 406
      },
      {
      "key": "DxyEsGtS",
      "createdAt": "2016-09-12T13:50:33.820Z",
      "totalCount": 156
      },
      {
      "key": "CjtlrCnQ",
      "createdAt": "2016-09-05T09:33:08.434Z",
      "totalCount": 190
      },
      {
      "key": "dpLbNAEW",
      "createdAt": "2016-08-31T08:46:18.788Z",
      "totalCount": 161
      },
      {
      "key": "ekAXvGbH",
      "createdAt": "2016-08-29T10:40:29.776Z",
      "totalCount": 176
      },
      {
      "key": "EBvAFmuD",
      "createdAt": "2016-08-15T08:41:20.332Z",
      "totalCount": 164
      },
      {
      "key": "LmxsfgxK",
      "createdAt": "2016-08-14T15:39:16.176Z",
      "totalCount": 183
      },
      {
      "key": "KELQLSDM",
      "createdAt": "2016-08-13T20:33:01.993Z",
      "totalCount": 156
      },
      {
      "key": "RuNtxamq",
      "createdAt": "2016-08-12T00:11:39.946Z",
      "totalCount": 183
      },
      {
      "key": "qSWPjzcx",
      "createdAt": "2016-08-10T18:26:13.499Z",
      "totalCount": 160
      },
      {
      "key": "fMrIPrep",
      "createdAt": "2016-08-05T07:08:46.962Z",
      "totalCount": 161
      },
      {
      "key": "aGAhhroN",
      "createdAt": "2016-07-26T08:56:44.557Z",
      "totalCount": 159
      },
      {
      "key": "dBEekhmy",
      "createdAt": "2016-07-14T09:27:48.414Z",
      "totalCount": 417
      },
      {
      "key": "fAucTwBC",
      "createdAt": "2016-07-13T05:29:04.278Z",
      "totalCount": 172
      },
      {
      "key": "OPRGBZjF",
      "createdAt": "2016-07-12T14:52:23.018Z",
      "totalCount": 179
      },
      {
      "key": "EthgIxbt",
      "createdAt": "2016-07-11T22:41:39.515Z",
      "totalCount": 177
      },
      {
      "key": "XamyOvbV",
      "createdAt": "2016-07-10T21:06:13.251Z",
      "totalCount": 179
      },
      {
      "key": "ELDWqZAC",
      "createdAt": "2016-07-09T01:00:37.970Z",
      "totalCount": 178
      },
      {
      "key": "VtvprBie",
      "createdAt": "2016-07-06T23:13:59.313Z",
      "totalCount": 166
      },
      {
      "key": "AABMaywM",
      "createdAt": "2016-06-24T09:25:25.570Z",
      "totalCount": 177
      },
      {
      "key": "TdaXsQuw",
      "createdAt": "2016-06-18T10:38:38.966Z",
      "totalCount": 153
      },
      {
      "key": "aJXtYPsh",
      "createdAt": "2016-06-13T18:19:19.825Z",
      "totalCount": 157
      },
      {
      "key": "chSllWNd",
      "createdAt": "2016-06-11T08:27:07.146Z",
      "totalCount": 159
      },
      {
      "key": "WCSwbINN",
      "createdAt": "2016-06-04T17:03:38.728Z",
      "totalCount": 171
      },
      {
      "key": "UjeUzHUs",
      "createdAt": "2016-05-31T21:17:23.637Z",
      "totalCount": 161
      },
      {
      "key": "LzFISgmt",
      "createdAt": "2016-05-31T18:22:22.749Z",
      "totalCount": 175
      },
      {
      "key": "DBjlLIDm",
      "createdAt": "2016-05-25T11:52:05.811Z",
      "totalCount": 154
      },
      {
      "key": "XHdXuWEK",
      "createdAt": "2016-05-18T22:05:16.775Z",
      "totalCount": 169
      },
      {
      "key": "dedEgceT",
      "createdAt": "2016-05-14T00:57:09.441Z",
      "totalCount": 179
      }
    ]
  }
```