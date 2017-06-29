'use strict';

angular.module('humanResource').config(['$stateProvider','$urlRouterProvider','$qProvider',function($stateProvider, $urlRouterProvider,$qProvider) {
    // $qProvider.errorOnUnhandledRejections(false);
    $urlRouterProvider.otherwise('/employee');

    $stateProvider

        .state('employee', {
            url: '/employee',
            component: 'employee'
        })

        .state('work-history', {
            url: '/work-history',
            component: 'workHistory'
        })

        .state('companies', {
            url:'/companies',
            component: 'companies'
        });
}]);