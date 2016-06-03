angular.module("app", []);

angular.module('app').controller('MainCtrl', [
    function () {
        var localStorage = window.localStorage;

        localStorage.setItem('user', 'chunmei');

        var contracts = {
            "id": "123",
            "userId": "cma",
            "contractNumber": "",
            "status": "new",
            "createDt": "06/01/2016",
            "lastModified": "06/02/2016",
            "startDate": new Date("06/01/2016"),
            "endDate": new Date("06/01/2017"),
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
                    "startDate": new Date("06/01/2016"),
                    "endDate": new Date("07/01/2016"),
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
                    "startDate": new Date("03/01/2016"),
                    "endDate": new Date("06/01/2016"),
                    "free": true,
                    "taxable": false,
                    "price": 0,
                    "gstPrice": 0
                },
                {
                    "id": "FPBMOM",
                    "status": "new",
                    "units": 10,
                    "startDate": new Date("01/01/2016"),
                    "endDate": new Date("06/01/2016"),
                    "free": false,
                    "taxable": true,
                    "price": 10,
                    "gstPrice": 2
                }
            ]
        };

        localStorage.setItem('contracts', JSON.stringify(contracts));

        var products = [
            {
                "id": "FMBMBAN",
                "title": "BrightMinds eBanner",
                "description": "BrightMinds eBanner description",
                "group": "BrightMinds",
                "line": "Niche Sites",
                "subline": "BannerAds",
                "taxable": "true"
            },
            {
                "id": "FPBMOM",
                "title": "BrightMinds Online Media",
                "description": "BrightMinds Online Media description",
                "group": "BrightMinds",
                "line": "Niche Sites",
                "subline": "BannerAds",
                "taxable": "true"
            },
            {
                "id": "FPJCMAGEM",
                "title": "BrightMinds eMagazine Media",
                "description": "BrightMinds eMagazine Media description",
                "group": "BrightMinds",
                "line": "Niche Sites",
                "subline": "BannerAds",
                "taxable": "false"
            },
            {
                "id": "FMBMAOP",
                "title": "BrightMinds eMagazine Media",
                "description": "BrightMinds eMagazine Media description",
                "group": "JobsCentral",
                "line": "Employer Services",
                "subline": "CareerFairs",
                "taxable": "true"
            },
            {
                "id": "FMTNISPJC",
                "title": "JobsCentral Talent Network",
                "description": "BrightMinds eMagazine Media description",
                "group": "Talent Network",
                "line": "Human Capital Software Solutions",
                "subline": "Talent Network International",
                "taxable": "true"
            }
        ];
        localStorage.setItem('products',
            JSON.stringify(products));

    }]);

