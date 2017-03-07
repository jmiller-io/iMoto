(function() {
  'use strict';
  angular.module('iMotoApp', ['ui.router', 'ui.bootstrap'])
    .config(MainRouter)

    MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
    function MainRouter($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('motorcycles', {
          url: '/motorcycles',
          templateUrl: 'motorcycles.html',
          controller: 'MotorcyclesController'
        })
        .state('home', {
          url: '/home'
        })
        .state('motorcycle-form', {
          url: '/motorcycle-form',
          templateUrl: 'motorcycle-form.html',
        })
        .state('detail', {
          url: '/detail/:id',
          templateUrl: 'motorcycles-detail.html',
          controller: 'MotorcyclesDetailController'
        });
      $urlRouterProvider.otherwise('/home');
    }
})();
