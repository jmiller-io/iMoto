angular.module('iMotoApp')
  .factory('MotorcyclesService', ['$http', function MotorcyclesService($http) {
    var service = {
      motorcycles: [],
      getMotorcycles: getMotorcycles,
      findMotorcycles: findMotorcycles,
      deleteMotorcycles: deleteMotorcycles
    }
    return service;

    function getMotorcycles() {
      return $http.get('http://127.0.0.1:3000/motorcycles')
        .success(function (response) {
          service.motorcycles = response.motorcycles
        })
    }

    function findMotorcycles(id) {
      return _.find(service.motorcycles, function(motorcycle) {
        return motorcycle._id == id
      })
    }

    function deleteMotorcycles(motorcycle) {
      $http
        .delete('http://localhost:3000/motorcycles/' + motorcycle._id)
        .then(function(response) {
          let index = service.motorcycles.indexOf(motorcycle);
          service.motorcycles.splice(index, 1)
        });
    }


  }])
 //  .factory('MotorcyclesService', ['$http', function($http){
 //    var motorcycles = [{_id: 1, make: 'yama', year: 2009}];
 //    return $http
 //      .get('http://127.0.0.1:3000/motorcycles')
 //      .then(function(response) {
 //        motorcycles = response.data.motorcycles
 //      })

 //    return {
 //      list: function() {
 //        return motorcycles
 //      },
 //      find: function(id) {
 //        return _.find(motorcycles, function(motorcycle) {
 //          return motorcycle._id == id
 //        })
 //      }
 //    }

 // }])
