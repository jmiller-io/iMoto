angular.module('iMotoApp')
  .factory('MotorcyclesService', ['$http', function($http){
    var motorcycles = [{_id: 1, make: 'yama', year: 2009}];
    $http
      .get('http://127.0.0.1:3000/motorcycles')
      .then(function(response) {
        motorcycles = response.data.motorcycles
      })

    return {
      list: function() {
        return motorcycles
      },
      find: function(id) {
        return _.find(motorcycles, function(motorcycle) {
          return motorcycle._id == id
        })
      }
    }

 }])
