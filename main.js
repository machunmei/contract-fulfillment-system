angular.module("app", []);

angular.module('app').controller('MainCtrl', [
    function () {
        var localStorage = window.localStorage;

        localStorage.setItem('user', 'chunmei');

        var contracts = [{
            "id": "123",
            "userId": "cma",
            "contractNumber": "",
            "status": "new",
            "createDt": "06/01/2016",
            "lastModified": "06/02/2016",
            "startDate": "06/01/2016",
            "endDate": "06/01/2017",
            "accountdid": "acc1244",
            "isNewCustomer": true,
            "totalNonGST": 134,
            "totalGST": 10,
            "totalPrice": 144,
            "notes": "this is note",
            "products": [
                {
                    "id": "FMBMBAN",
                    "status": "new",
                    "units": 10,
                    "startDate": "06/01/2016",
                    "endDate": "07/01/2016",
                    "free": false,
                    "taxable": true,
                    "price": 100,
                    "gstPrice": 11,
                    "options": "100px*100px"
                },
                {
                    "id": "FMBMBAN",
                    "status": "new",
                    "units": 2,
                    "startDate": "03/01/2016",
                    "endDate": "06/01/2016",
                    "free": true,
                    "taxable": false,
                    "price": 0,
                    "gstPrice": 0
                },
                {
                    "id": "FPBMOM",
                    "status": "new",
                    "units": 10,
                    "startDate": "01/01/2016",
                    "endDate": "06/01/2016",
                    "free": false,
                    "taxable": true,
                    "price": 10,
                    "gstPrice": 2
                }
            ]
        },
        {
            "id": "1234",
            "userId": "cma",
            "contractNumber": "",
            "status": "pending",
            "createDt": "06/01/2016",
            "lastModified": "06/02/2016",
            "startDate": "06/01/2016",
            "endDate": "06/01/2017",
            "accountdid": "acc1244",
            "isNewCustomer": true,
            "totalNonGST": 134,
            "totalGST": 10,
            "totalPrice": 144,
            "notes": "this is note",
            "products": [
                {
                    "id": "FMBMBAN",
                    "status": "new",
                    "units": 10,
                    "startDate": "06/01/2016",
                    "endDate": "07/01/2016",
                    "free": false,
                    "taxable": true,
                    "price": 100,
                    "gstPrice": 11,
                    "options": "100px*100px"
                },
                {
                    "id": "FMBMBAN",
                    "status": "new",
                    "units": 2,
                    "startDate": "03/01/2016",
                    "endDate": "06/01/2016",
                    "free": true,
                    "taxable": false,
                    "price": 0,
                    "gstPrice": 0
                },
                {
                    "id": "FPBMOM",
                    "status": "new",
                    "units": 10,
                    "startDate": "01/01/2016",
                    "endDate": "06/01/2016",
                    "free": false,
                    "taxable": true,
                    "price": 10,
                    "gstPrice": 2
                }
            ]
        }


        ];
        localStorage.setItem('contracts', JSON.stringify(contracts));

        var contacts = [{
            "contractId": "123",
            "company": "careerbuilder",
            "address": "US",
            "postcode": "100100",
            "regNumber": "reg123",
            "primaryContact": "chunmei",
            "title": "software engineer",
            "email": "chunmei@cb.com",
            "phone": "150xxxxxx",
            "fax": "77887xxxx"
        },
        {
            "contractId": "1234",
            "company": "careerbuilder2",
            "address": "US",
            "postcode": "100100",
            "regNumber": "reg123",
            "primaryContact": "chunmei",
            "title": "software engineer",
            "email": "chunmei@cb.com",
            "phone": "150xxxxxx",
            "fax": "77887xxxx"
        }
        ];
        localStorage.setItem('contacts',
            JSON.stringify(contacts));

        var billings = [
            {
                "contractId": "123",
                "company": "careerbuilder-china",
                "address": "shanghai",
                "postcode": "200120",
                "primaryContact": "shenghua",
                "title": "software engineer",
                "email": "shenghua@cb.com",
                "phone": "188xxxxxx",
                "fax": "68875817"
            }];
        localStorage.setItem('billings',
            JSON.stringify(contacts));


    }]);

