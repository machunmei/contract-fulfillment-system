angular.module("app").controller("contractEditCtrl", ["$scope", "dataRepository",
    function ($scope, dataRepository) {
        $scope.contractId = '123';

        $scope.contact = dataRepository.getContact($scope.contractId);

        console.log($scope.contact);
        $scope.bill = dataRepository.getBillingInfo($scope.contractId);
        $scope.contract = dataRepository.getContract($scope.contractId);

        $scope.groups = dataRepository.getGroups();
        $scope.productLines = dataRepository.getLines();
        $scope.products = dataRepository.getProducts();
        $scope.subLines = dataRepository.getSublines();

        $scope.currentUser = window.localStorage.getItem('user');
        $scope.taxRate = 0.07;

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
            return (statuses.indexOf(status) <= statuses.indexOf($scope.contract.status));
        };

        $scope.isNextStatus = function (status) {
            return (statuses.indexOf(status) == statuses.indexOf($scope.contract.status) + 1);
        };

        $scope.setStatus = function (status) {
            if (status == 'paid' && $scope.contract.contractNumber == '') {
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

        $scope.newProduct = {
            "id": "",
            "group": "",
            "line": "",
            "subline": ""
        };

        $scope.addProduct = function () {
            if ($scope.newProduct.id == '') {
                alert('Please select the product you want to add.')
                return;
            }


            $scope.contract.products.push({
                "id": $scope.newProduct.id,
                "status": "new",
                "units": 0,
                "startDate": new Date(),
                "endDate": new Date(),
                "free": false,
                "taxable": true,
                "price": 0,
                "gstPrice": 0,
                "options": ""
            });
        };

        $scope.removeProduct = function (index) {
            $scope.contract.products.splice(index, 1);

            $scope.countPrices();
        };

        $scope.countPrices = function () {
            var totalNonGST = 0;
            var totalGST = 0;
            for (var i = 0; i < $scope.contract.products.length; i++) {
                var prod = $scope.contract.products[i];
                if (prod.free) {
                    prod.price = 0;
                    prod.gstPrice = 0;
                } else {
                    totalNonGST += prod.price * prod.units;
                    if (prod.taxable) {
                        prod.gstPrice = (prod.price * prod.units * $scope.taxRate).toFixed(2);
                        totalGST += prod.gstPrice;
                    }
                }
            }

            $scope.contract.totalNonGST = totalNonGST;
            $scope.contract.totalGST = totalGST;
            $scope.contract.totalPrice = $scope.contract.totalNonGST + $scope.contract.totalGST;
        };

        $scope.resetPrice = function (index) {
            $scope.countPrices();
            //
            //$scope.contract.products[index].price = 0;
            //$scope.contract.products[index].gstPrice = 0;
        };

        $scope.save = function () {
            countPrices();
            alert('Save Successfully!')
        };

    }])
;
