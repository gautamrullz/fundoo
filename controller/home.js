/**
 * this is controller for form
*/
angular.module('myApp').controller('home',['$scope','$state',function($scope,$state){
    $scope.title="This is form";
    var data={
        username: $scope.username
    };
    $scope.next = function(){
        $state.go('next');
    }
}]);
