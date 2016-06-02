angular.module("app").controller("contractEditCtrl", ["$scope", function ($scope) {
    $scope.contact =
    {
        "contractId": "123",
        "company": "careerbuilder",
        "address": "agagag",
        "postcode": "200120",
        "regNumber": "reg123",
        "primaryContact": "chunmei",
        "title": "software engineer",
        "email": "a@b.com",
        "phone": "150xxxxxx",
        "fax": "77887xxxx"
    };

    $scope.bill =
        {
            "contractId": "123",
            "company": "careerbuilder",
            "address": "agagag",
            "postcode": "200120",
            "primaryContact": "chunmei",
            "title": "software engineer",
            "email": "a@b.com",
            "phone": "150xxxxxx",
            "fax": "77887xxxx"
        };



    $scope.contract = {
        "id": "123",
        "contract-number": "",
        "status": "new",
        "createDt": "06/01/2016",
        "lastModified": "06/02/2016",
        "startDate": new Date("06/01/2016"),
        "endDate": new Date("06/01/2017"),
        "accountdid": "",
        "isNewCustomer": "true",
        "total": "",
        "notes": "this is note",
        "products": [
            {
                "id": "FMBMBAN",
                "status": "new",
                "units": "10",
                "startDate": "",
                "endDate": "",
                "free": "false",
                "taxable": "true",
                "price": "100",
                "gst-price": "11"
            },
            {
                "id": "FMBMBAN",
                "status": "new",
                "units": "2",
                "startDate": "",
                "endDate": "",
                "free": "true",
                "taxable": "false",
                "price": "0",
                "gst-price": ""
            },
            {
                "id": "FPBMOM",
                "status": "new",
                "units": "10",
                "startDate": "",
                "endDate": "",
                "free": "false",
                "taxable": "true",
                "price": "10",
                "gst-price": "2"
            }
        ]
    };
}]);
