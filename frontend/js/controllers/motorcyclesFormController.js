angular.module('iMotoApp')
  .controller('MotorcyclesFormController', MotorcyclesFormController)

  MotorcyclesFormController.$inject = ['$http']

  function MotorcyclesFormController($http, MotorcyclesService) {
    var vm = this;
    vm.newMotorcycle = {};
    vm.addMotorcycle = addMotorcycle;


    function addMotorcycle() {
      $http
        .post('http://127.0.0.1:3000/motorcycles', vm.newMotorcycle)
        .then(function(response) {
          Motorcycles.getMotorcycles();
        })
      vm.newMotorcycle = {};
    }
  }