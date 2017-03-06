angular.module('iMotoApp')
  .factory('MotorcyclesService', ['$http', function($http){
    var motorcycles = [];
    $http
      .get('http://127.0.0.1:3000/motorcycles')
      .then(function(response) {
        motorcycles = response.data.motorcycles
        console.log(motorcycles)
      })

    return {
      list: function() {
        return motorcycles
      },
      find: function(_id) {
        return _.find(motorcycles, function(motorcycle) {
          return motorcycle._id == _id
        })
      }
    }

 }])
