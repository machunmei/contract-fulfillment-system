angular.module("app").controller("contractListCtrl", ["$scope", "dataRepository", function ($scope, dataRepository) {
    $scope.contracts = dataRepository.getContracts();
    $scope.products_info = dataRepository.getProducts();

    $scope.getCompanyNameByContractId = function(contractId){
      var contact_info = $scope.contacts_info.filter(info => info.contractId == contractId)[0];
      return contact_info.company;
    }

    $scope.getProductInfoByProductId = function(productId){
      return $scope.products_info.filter(info => info.id == productId)[0];
    }

    $scope.completeContracts = getCompleteContracts();
    $scope.filteredContracts = getCompleteContracts();

    function getCompleteContracts() {
      var completeContracts = $scope.contracts;
      completeContracts.forEach(function(contract) {
        //var company = $scope.companies.filter(company => company.contractId === contract.id)[0];
        var company = dataRepository.getContact(contract.id);
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

    $scope.filterRules = [
      {"key": "companyName", "operator": "=", "value":"Careerbuilder"}
    ];
    $scope.filterKeys = [
      {"key" : "companyName", "value": "Company Name"},
      {"key" : "status", "value":"Status"},
      {"key" : "startDate", "value":"Start Date"}
    ];

    $scope.filterOperators = [{"key":">", "value":">"}, {"key":"=", "value":"="}, {"key":"<", "value":"<"}];

    $scope.addFilterRule = function() {
      var rule = {"key": "", "operator": "", "value":""};
      $scope.filterRules.push(rule);
    }

    $scope.removeFilterRule = function(rule) {
      $scope.filterRules = $scope.filterRules.filter(r => r.key != rule.key);
    }

    $scope.runFilter = function() {
      var contracts = $scope.completeContracts;

      if($scope.filterRules.length == 0){
        return contracts;
      }

      $scope.filteredContracts = contracts.filter(contract => {
        return passRules(contract, $scope.filterRules);
      });
    }

    $scope.getContractEditUri = function(contractId) {
      return "/contract-edit.html?user=cma&contractId=" + contractId;
    }

    function passFilter(contract, filterRule) {
      if(filterRule.operator == "=") {
        if(contract[filterRule.key] == filterRule.value){
          return true;
        }
      } else {
        var cValue = Date.parse(contract[filterRule.key]);
        var filterValue = Date.parse(filterRule.value);

        if(filterRule.operator == ">") {
          if(cValue > filterValue) {
            return true;
          }
        } else if(filterRule.operator == "<") {
          if(cValue < filterValue) {
            return true;
          }
        }
      }

      return false;
    }

    function passRules(contract, filterRules) {
      for(var i=0; i<filterRules.length; i++){
        if(!passFilter(contract, filterRules[i])){
          return false;
        }
      }
      return true;
    }

}]);
