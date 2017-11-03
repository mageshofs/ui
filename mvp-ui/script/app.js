angular.module('myapp', ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise("/home");

      $stateProvider
          .state('root', {
              abstract: true,
              url:''
          })
          .state('root.home', {
              url: '/home',
              templateUrl: 'view/home.html',
              
              
          }).state('root.register', {
              url: '/register',
              templateUrl: 'view/register.html',
              
            
              
          }).state('root.signup', {
              url: '/signup',
              templateUrl: 'view/signup.html',
             
              
          }).state('root.categories', {
              url: '/categories',
              templateUrl: 'view/categories.html',
			  controller:'AppCtrl',
             
              
          }).state('root.categories.songlistold', {
              url: '/oldsongs',
              templateUrl: 'view/songlistold.html',
			  controller:'AppCtrl',
			  
			}).state('root.categories.songlistnew', {
              url: '/newsongs',
              templateUrl: 'view/songlistnew.html',
			  controller:'AppCtrl',
			  
			}).state('root.categories.songlistdevotional', {
              url: '/devotionalsongs',
              templateUrl: 'view/songlistdevotional.html',
			  controller:'AppCtrl',
			  
			}).state('root.categories.songlistclassical', {
              url: '/classicalsongs',
              templateUrl: 'view/songlistclassicall.html',
			  controller:'AppCtrl',
			})
    });
