angular.module('app')
    .service('dataRepository', [
        function () {
            this.getProducts = function () {
                return JSON.parse(window.localStorage.getItem('products'));
            };

            this.getContracts = function () {
                return JSON.parse(window.localStorage.getItem('contracts'));
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
