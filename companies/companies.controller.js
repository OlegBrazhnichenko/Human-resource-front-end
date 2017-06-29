'use strict';

angular.module('companies').controller('CompaniesController',['Company',function CompaniesController(Company){

    var self = this;

    self.isAbleToCancel = function() {

        return typeof self.onCancelCompanyCreate === "function";
    }

}]);