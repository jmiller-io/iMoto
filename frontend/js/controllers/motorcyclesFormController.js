angular.module('iMotoApp')
  .controller('MotorcyclesFormController', MotorcyclesFormController)

  MotorcyclesFormController.$inject = ['$http','$state', 'MotorcyclesService']

  function MotorcyclesFormController($http, $state, MotorcyclesService) {
    var vm = this;
    vm.newMotorcycle = {};
    vm.addMotorcycle = addMotorcycle;


    function addMotorcycle() {
      $http
        .post('http://127.0.0.1:3000/motorcycles', vm.newMotorcycle)
        .then(function(response) {
          $state.go('home', null, { reload: true });
          MotorcyclesService.getMotorcycles()
        })
      vm.newMotorcycle = {};
    }
  }
