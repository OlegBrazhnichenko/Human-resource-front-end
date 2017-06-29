'use strict';

angular.module('humanResource').controller('HumanResourceController',['$scope','$location',function HumanResourceController($scope,$location){

    var self = this;

    self.selectedIndex = 0;

    self.go = function(path){
        $location.path(path);
    };

    $scope.$watch(function () {
        return location.hash
    }, function (value) {
        switch (value) {
            case '#!/work-history': self.selectedIndex = 1;
            break;
            default: self.selectedIndex = 0;
            break;
        }
    });

}]);