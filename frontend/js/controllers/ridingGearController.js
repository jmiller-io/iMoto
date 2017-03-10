angular.module('iMotoApp')
  .controller('RidingGearController', RidingGearController)

  RidingGearController.$inject = ['$http'];

  function RidingGearController($http) {
    var vm = this;
    vm.allGear = [];
    vm.gear = {};
    vm.getAllGear = getAllGear;
    vm.addGear = addGear;

    getAllGear()
    function getAllGear() {
      $http
        .get('http://localhost:3000/gear')
        .success(function(response) {
          console.log(response.gear)
          vm.allGear = response.gear
        })
    }

    function addGear() {
      console.log(vm.gear)
      $http
        .post('http://localhost:3000/gear', vm.gear)
        .then(function(response) {
          getAllGear()
        })
        vm.gear = {};
    }

  }
