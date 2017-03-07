angular.module('iMotoApp')
  .controller('MotorcyclesFormController', MotorcyclesFormController)

  MotorcyclesFormController.$inject = ['$http']

  function MotorcyclesFormController($http) {
    var vm = this;
    vm.newMotorcycle = {};
    vm.addMotorcycle = addMotorcycle;


    function addMotorcycle() {
      console.log('hi from addmoto')
      $http
        .post('http://127.0.0.1:3000/motorcycles', vm.newMotorcycle)
        .then(function(response) {
          console.log(response)
        })
      vm.newMotorcycle = {};
    }
  }
