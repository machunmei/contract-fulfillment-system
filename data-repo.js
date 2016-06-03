angular.module('app')
    .service('productsRepository', [
        function () {
            this.get = function () {
                return JSON.parse(window.localStorage.getItem('products'));
            };
        }
    ])
    .service('contractsRepository', [
        function () {
            this.get = function () {
                return window.localStorage.getItem('test');
            }
        }
    ]);
