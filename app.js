angular.module('myApp',['ngMessages','ui.router'])
    .config(function($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home',{
            url:'/home',
            templateUrl:'template/home.html',
            controller:'home',
            onEnter:function(){
              console.log("in state");
            }
        })
        .state('next',{
            url : '/next',
            templateUrl : 'template/next.html',
            controller : 'next',
            onEnter : function(){
                console.log('inside table');
            }
        })

    });
