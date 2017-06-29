'use strict';

angular.module('employee').controller('EmployeeController',function EmployeeController(Company, Employee, $q) {
    var self = this;

    self.creatingMode = false;
    self.newCompany = newCompany;
    self.querySearch   = querySearch;
    self.submit = submit;
    self.onCancelCompanyCreate = onCancelCompanyCreate;

    loadCompanies().then(function(data){
        self.companies = data;
    });

    function onCancelCompanyCreate(){
        self.creatingMode = false;
    }

    function newCompany(company) {
        self.searchCompany = "";
        self.creatingMode = true;
    }

    function querySearch (query, list) {

        return query ? list.filter( createFilterFor(query) ) : list;
    }

    function loadCompanies() {
        var deferred = $q.defer();
        Company.query().$promise.then(function(data){
            data = data.map( function (company) {

                return {
                    id: company.id,
                    name: company.name,
                    value: company.name.toLowerCase()
                };
            });

            deferred.resolve(data)
        });

        return deferred.promise;
    }

    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(item) {

            return (item.value.indexOf(lowercaseQuery) === 0);
        };
    }
    function submit(){
        if(self.creatingMode){
            createNewCompany().then(function(company){
                createNewEmployee(company.id);
            },function(error){
                console.log(error);
                return false;
            });
        }else{
            createNewEmployee(self.selectedCompany.id);
        }

    }
    function createNewEmployee(company_id){
        var data = {
            name: self.employeeName,
            surname: self.employeeSurname,
            bdate:  self.employeeBirthday.getTime(),
            email: self.employeeEmail,
            phone: self.employeePhoneNumber,
            address: self.employeeAddress,
            role: self.role,
            company_id: company_id
        };
        var employee = new Employee(data);
        employee.$save().then(function(data){
            console.log('received', data);
        }, function(error){
            console.log('error', error);
        });
    }

    function createNewCompany(){
        var company = new Company(self.item);

        return company.$save();
    }
});