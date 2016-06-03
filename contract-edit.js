angular.module("app").controller("contractEditCtrl", ["$scope", "productsRepository", "contractsRepository",
    function ($scope, productsRepository, contractsRepository) {
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

        $scope.groups = ["BrightMinds", "JobsCentral", "JobsCentral Learning Fair", "JobsCentral Learning", "Talent Network"];
        $scope.productLines =
            ["Niche Sites", "Employer Services", "Email and Display Ads", "BannerAds", "Other Revenue", "Job Postings", "Human Capital Software Solutions"];

        //$scope.productLines = [
        //    {"BrightMinds": ["Niche Sites", "Employer Services"]},
        //    {"JobsCentral": ["Employer Services", "Email and Display Ads", "BannerAds", "Other Revenue", "Job Postings"]},
        //    {"JobsCentral Learning Fair": ["BannerAds"]},
        //    {"JobsCentral Learning": ["Email and Display Ads", "Other Revenue", "Job Postings"]},
        //    {"Talent Network": ["Human Capital Software Solutions"]}];
        $scope.subLines = ["RDB", "BannerAds", "Magazine", "Talent Network International", "Job Postings", "LearningSolutions", "Featured Employer", "Direct Email", "Smart Jobs"];

        //$scope.subLines = [
        //    {"Niche Sites":["BannerAds", "Consulting", "Direct Email", "Job Posting-PPU"]},
        //    {"Job Postings":["Featured Employer", "Job Posting-PPU", "Job Postings"]},
        //    {"Employer Services":["Magazine", "Job Postings", "LearningSolutions"]},
        //    {"Human Capital Software Solutions":["Talent Network International"]}
        //];

        console.log("test" + contractsRepository.get());

        $scope.products = productsRepository.get();

        console.log($scope.products);

        $scope.products1 = [
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

        //$scope.updateProducts = function () {
        //    $scope.displayProducts = [];
        //    for (var i = 0; i < $scope.products.length; i++) {
        //        product = $scope.products[i];
        //
        //    }
        //};

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

//$scope.$watch('contract.products', function (newValue, oldValue) {
//    console.log(newValue);
//    console.log(oldValue);
//
//    $scope.countPrices();
//});

// ng-blur or $watch
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
