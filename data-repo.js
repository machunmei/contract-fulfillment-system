angular.module('app')
    .service('dataRepository', [
        function () {

            /// READ ONLY
            this.getProducts = function () {
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
                return products;
            };

            this.getGroups = function () {
                return ["BrightMinds", "JobsCentral", "JobsCentral Learning Fair", "JobsCentral Learning", "Talent Network"];
            };

            this.getLines = function () {
                return ["Niche Sites", "Employer Services", "Email and Display Ads", "BannerAds", "Other Revenue", "Job Postings", "Human Capital Software Solutions"];
            };

            this.getSublines = function () {
                return ["RDB", "BannerAds", "Magazine", "Talent Network International", "Job Postings", "LearningSolutions", "Featured Employer", "Direct Email", "Smart Jobs"];
            };

            ////-----


            this.getContracts = function () {
                return JSON.parse(window.localStorage.getItem('contracts'));
            };

            this.getContact = function (contractId) {
                var contacts = JSON.parse(window.localStorage.getItem('contacts'));
                for (var i = 0; i < contacts.length; i++) {
                    if (contacts[i].contractId == contractId) {
                        return contacts[i];
                    }
                }

                return {};
            };

            this.getBillingInfo = function (contractId) {
                var billings = JSON.parse(window.localStorage.getItem('billings'));
                for (var i = 0; i < billings.length; i++) {
                    if (billings[i].contractId == contractId) {
                        return billings[i];
                    }
                }

                return {};
            };

            this.getContract = function (contractId) {
                var contracts = this.getContracts();
                for (var i = 0; i < contracts.length; i++) {
                    if (contracts[i].id == contractId) {
                        return contracts[i];
                    }
                }

                return {};
            };
        }
    ]);
