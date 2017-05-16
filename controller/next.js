angular.module('myApp').controller('next', function ($scope, $http) {
    // $http.get('Directive/dummy.json').success(function(data){
    //     $scope.dummy = data;
    // })
    
    $scope.dummy =
    {
        "header":[{
            "userId": "UserId",
            "date": "Date",
            "inTime": "InTime",
            "outTime": "OutTime",
            "totalTime": "TotalTime",
            "intent": "Intent"
        }],
        "data": [{
            "userId": "+91234567890",
            "date": "2015-04-23",
            "inTime": "12:30 PM",
            "outTime": "0",
            "totalTime": "0",
            "intent": "attendance"
        }]
    };
    console.log($scope.dummy.header[0].userId);
    $scope.dum = {
        "header" : [{
            "name" : "ananya",
            "address" : "Kolkata",
            "phone" : 8787566722,
            "gender":"female",
            "email":"ananya@gmail.com",
            "pan_no":"ARGT345456"

        }],
        "data" : [{
          "name" : "ananya",
          "address" : "Kolkata",
          "phone" : 8787566722,
          "gender":"female",
          "email":"ananya@gmail.com",
          "pan_no":"ARGT345456"

        }]
    };
    console.log($scope.dum.header);
});
