'use strict';

angular.module('employee').service('Employee',function($resource, App){

    return $resource(App.getDomain()+'/employee', {}, {
        get:{
            isArray : true
        }
    });
});
