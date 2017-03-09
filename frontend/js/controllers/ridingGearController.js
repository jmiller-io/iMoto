angular.module('iMotoApp')
  .controller('RidingGearController', RidingGearController)

  RidingGearController.$inject = ['$http'];

  function RidingGearController($http) {
    var vm = this;
    vm.allGear = []
    vm.getAllGear = getAllGear

    getAllGear()
    function getAllGear() {
      $http
        .get('http://localhost:3000/gear')
        .success(function(response) {
          console.log(response.gear)
          vm.allGear = response.gear
        })
    }

  }
