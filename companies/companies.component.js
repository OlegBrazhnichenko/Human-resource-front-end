'use strict';

angular.module('companies').component('companies',{
    templateUrl:'companies/companies.template.html',
    controller: 'CompaniesController',
    bindings: {
        onCancelCompanyCreate: "&",
        item: "="
    }
});