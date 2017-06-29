'use strict';

angular.module('humanResource').service('App',function(){
    var service = {};

    var domain = 'http://127.0.0.1:8000/';

    service.getDomain = function(){
        return domain;
    };

    return service;
});
