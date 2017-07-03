'use strict';

angular.module('workHistory').controller('WorkHistoryController', function WorkHistoryController(WorkHistory ,Company, Employee, $q, $mdDialog, $scope){
    var self = this;

    self.creatingMode = false;
    self.newCompany = newCompany;
    self.querySearch   = querySearch;
    self.submit = submit;
    self.onCancelCompanyCreate = onCancelCompanyCreate;

    loadCompanies().then(function(data){
       self.companies = data;
    });
    loadEmployees().then(function(data){
        self.employees = data;
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

    function loadEmployees() {
        var deferred = $q.defer();
        Employee.query().$promise.then(function(data){
            data = data.map( function (employee) {

                return {
                    id: employee.id,
                    name: employee.name,
                    value: employee.name.toLowerCase()
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
    function submit(form){
        if(self.creatingMode){
            createNewCompany().then(function(company){
                createNewWorkHistory(company.id, form);
            },function(error){
                console.log(error);
                return false;
            });
        }else{
            createNewWorkHistory(self.selectedCompany.id, form);
        }
    }
    function resetForm(form){
        self.searchCompany = "";
        self.searchEmployee = "";
        self.startDate = "";
        self.endDate = "";
        self.role = "";
        form.$setUntouched();
        form.$setPristine();
    }
    function createNewWorkHistory(company_id, form){
        var data = {
            "employee_id" : self.selectedEmployee.id,
            "company_id" : company_id,
            "start_date" : self.startDate.getTime(),
            "end_date" : self.endDate.getTime(),
            "role" : self.role
        };
        var workHistory = new WorkHistory(data);
        workHistory.$save().then(function(data){
            $scope.showAlert("success");
            resetForm(form);
        }, function(error){
            console.log('error', error);
            $scope.showAlert("error");
        });
    }

    function createNewCompany(){
            var company = new Company(self.item);

            return company.$save();
    }
    $scope.showAlert = function(status) {
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title(status)
                .ok('Got it!')

        );
    };
});