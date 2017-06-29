'use strict';

angular.module('workHistory').service('WorkHistory',function($resource, App){

    return $resource(App.getDomain()+'/work-history', {}, {
        get:{
            isArray : true
        }
    });
});