angular.module('iMotoApp')
  .controller('iMotoController', iMotoController);

  iMotoController.$inject = ['$http'];

  function iMotoController($http) {
    var self = this;
    self.all = [];
    self.getMotorcycles = getMotorcycles;

    getMotorcycles();
    function getMotorcycles() {
      $http
        .get('http://localhost:3000/motorcycles')
        .then(function(response) {
          self.all = response.data.motorcycles;
        });
    }


  }
