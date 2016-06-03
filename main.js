angular.module("app", []);

angular.module('app').controller('MainCtrl', [
    function () {
        var localStorage = window.localStorage;

        localStorage.setItem('user', 'chunmei');

        localStorage.setItem('contracts', []);


        localStorage.setItem('products',
            JSON.stringify([
                {
                    "id": "FPBMOM",
                    "title": "BrightMinds Online Media",
                    "description": "BrightMinds Online Media description",
                    "group": "BrightMinds",
                    "line": "Niche Sites",
                    "subline": "BannerAds",
                    "taxable": "true"
                }
            ]));
    }]);

