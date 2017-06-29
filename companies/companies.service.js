'use strict';

angular.module('companies').service('Company',function($resource, App){

    return $resource(App.getDomain()+'/company', {}, {
        get:{
            isArray : true
        }
    });
});
