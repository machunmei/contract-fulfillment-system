angular.module("app").controller("contractEditCtrl", ["$scope", "$location", function ($scope, $location) {
    $scope.contact =
    {
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
    };

    $scope.bill =
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
    };

    $scope.contract = {
        "id": "123",
        "userId": "cma",
        "contractNumber": "",
        "status": "pending",
        "createDt": "06/01/2016",
        "lastModified": "06/02/2016",
        "startDate": new Date("06/01/2016"),
        "endDate": new Date("06/01/2017"),
        "accountdid": "acc1244",
        "isNewCustomer": true,
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

    $scope.currentUser = $location.search()['user'] || 'chunmei';

    $scope.isContactCollapsed = true;
    $scope.isBillingCollapsed = true;

    $scope.hasContractNumber = $scope.contract.contractNumber != "";

    $scope.isReadOnly = function () {
        if (contract.status == 'new' || contract.status == 'proposal') {
            return false;
        } else {
            return true;
        }
    };

    var statuses = ['new', 'proposal', 'pending', 'paid', 'finished'];
    $scope.isDone = function (status) {
        return (statuses.indexOf(status.toLowerCase()) <= statuses.indexOf($scope.contract.status.toLowerCase()));
    };

    $scope.isNextStatus = function (status) {
        return (statuses.indexOf(status.toLowerCase()) == statuses.indexOf($scope.contract.status.toLowerCase()) + 1);
    };

    $scope.setStatus = function (status) {
        if(status =='paid' && $scope.contract.contractNumber == ''){
            alert('Please fill up contract number before you move to the next status.')
            return;
        }

        $scope.contract.status = status;
    };

    $scope.copyContact = function () {
        $scope.bill.company = $scope.contact.company;
        $scope.bill.address = $scope.contact.address;
        $scope.bill.postcode = $scope.contact.postcode;
        $scope.bill.primaryContact = $scope.contact.primaryContact;
        $scope.bill.title = $scope.contact.title;
        $scope.bill.email = $scope.contact.email;
        $scope.bill.phone = $scope.contact.phone;
        $scope.bill.fax = $scope.contact.fax;
    };

    $scope.save = function () {
        alert('Save Successfully!')
    };

}]);
