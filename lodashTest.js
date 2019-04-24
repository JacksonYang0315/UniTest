const _ = require('lodash')

let array = [
    {
      "id": 1,
      "date": "2019-04-22",
      "time": "1-3",
      "case": "Sysplex PoC",
      "note": null,
      "isDelete": false,
      "createdAt": "2019-04-22T11:19:00.822Z",
      "updatedAt": "2019-04-24T02:57:29.840Z",
      "AccountId": 2,
      "TeamMembers": [
        {
          "id": 1,
          "email": "jacksony@tw.ibm.com",
          "name": "Jackson Yang",
          "phone": "0988567895",
          "isDelete": false,
          "createdAt": "2019-04-17T06:59:59.105Z",
          "updatedAt": "2019-04-17T06:59:59.105Z",
          "MemberSchedule": {
            "createdAt": "2019-04-24T02:57:29.851Z",
            "updatedAt": "2019-04-24T02:57:29.851Z",
            "TeamMemberId": 1,
            "TeamScheduleId": 1
          }
        },
        {
          "id": 2,
          "email": "ytlee@tw.ibm.com",
          "name": "Dustin Lee",
          "phone": "0921827803",
          "isDelete": false,
          "createdAt": "2019-04-17T07:06:25.779Z",
          "updatedAt": "2019-04-17T07:06:25.779Z",
          "MemberSchedule": {
            "createdAt": "2019-04-24T02:57:29.851Z",
            "updatedAt": "2019-04-24T02:57:29.851Z",
            "TeamMemberId": 2,
            "TeamScheduleId": 1
          }
        }
      ],
      "Account": {
        "id": 2,
        "name": "POST",
        "phone": null,
        "isDelete": false,
        "createdAt": "2019-04-19T03:34:54.342Z",
        "updatedAt": "2019-04-19T03:34:54.342Z"
      }
    },
    {
      "id": 2,
      "date": "2019-04-24",
      "time": "2-8",
      "case": "Post Sysplex",
      "note": "測試",
      "isDelete": false,
      "createdAt": "2019-04-22T15:10:45.723Z",
      "updatedAt": "2019-04-24T02:57:34.060Z",
      "AccountId": 2,
      "TeamMembers": [
        {
          "id": 2,
          "email": "ytlee@tw.ibm.com",
          "name": "Dustin Lee",
          "phone": "0921827803",
          "isDelete": false,
          "createdAt": "2019-04-17T07:06:25.779Z",
          "updatedAt": "2019-04-17T07:06:25.779Z",
          "MemberSchedule": {
            "createdAt": "2019-04-24T02:57:34.079Z",
            "updatedAt": "2019-04-24T02:57:34.079Z",
            "TeamMemberId": 2,
            "TeamScheduleId": 2
          }
        }
      ],
      "Account": {
        "id": 2,
        "name": "POST",
        "phone": null,
        "isDelete": false,
        "createdAt": "2019-04-19T03:34:54.342Z",
        "updatedAt": "2019-04-19T03:34:54.342Z"
      }
    },
    {
      "id": 3,
      "date": "2019-04-03",
      "time": "0-6",
      "case": "CICS",
      "note": "測試3",
      "isDelete": false,
      "createdAt": "2019-04-22T15:11:28.067Z",
      "updatedAt": "2019-04-24T02:57:25.151Z",
      "AccountId": 2,
      "TeamMembers": [
        {
          "id": 1,
          "email": "jacksony@tw.ibm.com",
          "name": "Jackson Yang",
          "phone": "0988567895",
          "isDelete": false,
          "createdAt": "2019-04-17T06:59:59.105Z",
          "updatedAt": "2019-04-17T06:59:59.105Z",
          "MemberSchedule": {
            "createdAt": "2019-04-24T02:57:25.174Z",
            "updatedAt": "2019-04-24T02:57:25.174Z",
            "TeamMemberId": 1,
            "TeamScheduleId": 3
          }
        },
        {
          "id": 2,
          "email": "ytlee@tw.ibm.com",
          "name": "Dustin Lee",
          "phone": "0921827803",
          "isDelete": false,
          "createdAt": "2019-04-17T07:06:25.779Z",
          "updatedAt": "2019-04-17T07:06:25.779Z",
          "MemberSchedule": {
            "createdAt": "2019-04-24T02:57:25.174Z",
            "updatedAt": "2019-04-24T02:57:25.174Z",
            "TeamMemberId": 2,
            "TeamScheduleId": 3
          }
        },
        {
          "id": 3,
          "email": "dylanc@tw.ibm.com",
          "name": "Dylan Chang",
          "phone": "0919222572",
          "isDelete": false,
          "createdAt": "2019-04-23T06:03:55.703Z",
          "updatedAt": "2019-04-23T06:03:55.703Z",
          "MemberSchedule": {
            "createdAt": "2019-04-24T02:57:25.174Z",
            "updatedAt": "2019-04-24T02:57:25.174Z",
            "TeamMemberId": 3,
            "TeamScheduleId": 3
          }
        }
      ],
      "Account": {
        "id": 2,
        "name": "POST",
        "phone": null,
        "isDelete": false,
        "createdAt": "2019-04-19T03:34:54.342Z",
        "updatedAt": "2019-04-19T03:34:54.342Z"
      }
    }
  ]


  console.log(_.some(array,'date'))