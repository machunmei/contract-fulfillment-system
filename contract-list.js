angular.module("app").controller("contractListCtrl", ["$scope", function ($scope) {
  $scope.contracts = [
  {
    "id": "123",
    "contractNumber" : "",
    "status" : "pending",
    "createdDate": "2016-6-1",
    "last-modified": "2016-6-2",
    "startDate":"2016-6-1",
    "endDate":"2017-6-1",
    "accountdid": "",
    "isNewCustomer": "true",
    "totalPrice": "5000",
    "notes": "",
    "products": [
      {
        "id": "FMBMBAN",
        "status": "new",
        "units": "10",
        "startDate": "2016-xx-xx",
        "endDate": "2016-xx-xx",
        "isFree": "false",
        "taxable": "true",
        "price": "100",
        "gstPrice":"11"
      },
      {
        "id": "FMBMBAN",
        "status": "new",
        "units": "2",
        "startDate": "2016-xx-xx",
        "endDate": "2016-xx-xx",
        "isFree": "true",
        "taxable": "false",
        "price": "0",
        "gstPrice":"2016-xx-xx"
      },
      {
        "id": "FPBMOM",
        "status": "new",
        "units": "10",
        "startDate": "2016-xx-xx",
        "endDate": "2016-xx-xx",
        "isFree": "false",
        "taxable": "true",
        "price": "10",
        "gst-price":"2"
      }
    ]
  },

  {
    "id": "124",
    "contractNumber" : "CT-1233",
    "status" : "complete",
    "createdDate": "2016-3-1",
    "lastModified": "2016-5-2",
    "startDate":"2016-03-04",
    "endDate":"2016-04-04",
    "accountdid": "",
    "totalPrice": "6000",
    "notes": "",
    "products": [
      {
        "id": "FMBMBAN",
        "status": "new",
        "units": "10",
        "startDate": "2016-xx-xx",
        "endDate": "2016-xx-xx",
        "isFree": "false",
        "taxable": "true",
        "price": "100",
        "gstPrice":"22"
      },
      {
        "id": "FMBMBAN",
        "status": "new",
        "units": "2",
        "startDate": "2016-xx-xx",
        "endDate": "2016-xx-xx",
        "isFree": "true",
        "taxable": "false",
        "price": "0",
        "gstPrice":""
      },
      {
        "id": "FPBMOM",
        "status": "new",
        "units": "10",
        "startDate": "2016-xx-xx",
        "endDate": "2016-xx-xx",
        "isFree": "false",
        "taxable": "true",
        "price": "10",
        "gstPrice":"22"
      }
    ]
  }
];

$scope.companies = [
  {
    "contractId":"123",
    "companyName": "careerbuilder",
    "address": "agagag",
    "postcode": "200120",
    "regNumber": "reg123",
    "primaryContact":"chunmei",
    "title": "software engineer",
    "email": "a@b.com",
    "phone":"150xxxxxx",
    "fax":"77887xxxx"
  },
  {
    "contractId":"124",
    "companyName": "careerbuilder",
    "address": "agagag",
    "postcode": "200120",
    "regNumber": "reg123",
    "primaryContact":"chunmei",
    "title": "software engineer",
    "email": "a@b.com",
    "phone":"150xxxxxx",
    "fax":"77887xxxx"
  }
];

$scope.products_info = [{
  "id": "FMBMBAN",
  "title": "BrightMinds eBanner",
  "description": "BrightMinds eBanner description",
  "group": "BrightMinds",
  "line": "Niche Sites",
  "subLine": "BannerAds",
  "taxable":"true"
},
{
  "id": "FPBMOM",
  "title": "BrightMinds Online Media",
  "description": "BrightMinds Online Media description",
  "group": "BrightMinds",
  "line": "Niche Sites",
  "subLine": "BannerAds",
  "taxable":"true"
},
{
  "id": "FPJCMAGEM",
  "title": "BrightMinds eMagazine Media",
  "description": "BrightMinds eMagazine Media description",
  "group": "BrightMinds",
  "line": "Niche Sites",
  "subLine": "BannerAds",
  "taxable":"false"
},
{
  "id": "FMBMAOP",
  "title": "BrightMinds eMagazine Media",
  "description": "BrightMinds eMagazine Media description",
  "group": "BrightMinds",
  "line": "Employer Services",
  "subLine": "CareerFairs",
  "taxable":"true"
}
];

$scope.getCompanyNameByContractId = function(contractId){
  var contact_info = $scope.contacts_info.filter(info => info.contractId == contractId)[0];
  return contact_info.company;
}

$scope.getProductInfoByProductId = function(productId){
  return $scope.products_info.filter(info => info.id == productId)[0];
}

$scope.completeContracts = getCompleteContracts();

function getCompleteContracts() {
  var completeContracts = $scope.contracts;
  completeContracts.forEach(function(contract) {
    var company = $scope.companies.filter(company => company.contractId === contract.id)[0];
    contract["companyName"] = company.companyName;

    contract.products.forEach(function(product) {
      var product_info = $scope.products_info.filter(info => info.id === product.id)[0];
      product["title"] = product_info.title;
      product["description"] = product_info.description;
      product["group"] = product_info.group;
      product["line"] = product_info.line;
      product["subLine"] = product_info.subLine;
      product["taxable"] = product_info.taxable;
    });
  });

  return completeContracts;
}

$scope.showHideProducts = function(contract){
  contract.showProducts = !contract.showProducts ;
}


}]);
