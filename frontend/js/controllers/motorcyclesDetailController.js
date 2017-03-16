angular.module('iMotoApp')
  .controller('MotorcyclesDetailController', MotorcyclesDetailController)

  MotorcyclesDetailController.$inject = ['$scope', '$stateParams', 'MotorcyclesService', '$http'];

  function MotorcyclesDetailController($scope, $stateParams, MotorcyclesService, $http) {
    var vm = this;
    vm.editMotorcycle = {};
    $scope.tab = 1;
    vm.addPart = addPart;
    vm.part = {};
    vm.editPart = editPart;
    vm.allParts = [];
    vm.selected = {};
    vm.getTemplate = getTemplate;
    vm.reset = reset
    vm.removePart = removePart;
    vm.deleteMotorcycles = function(motorcycle) {
      MotorcyclesService.deleteMotorcycles(motorcycle)
    }

    function reset() {
      vm.selected = {};
    }

    function removePart(part) {
      //console.log(MotorcyclesService.motorcycles)
      $http
        .delete('http://localhost:3000/motorcycles/' + $stateParams.id + '/part/' + part._id)
        .then(function(response) {
          // let index = vm.allParts.indexOf(part);
          // vm.allPart.splice(index, 1);
          console.log('and then')
        })
    }

    function editPart(part) {
      vm.selected = angular.copy(part)
    }

    function getTemplate(part) {
      if(part._id === vm.selected._id) {
        return 'edit';
      }
      else return 'display';
    }

    function addPart() {
      console.log(vm.part)
      $http
        .post('http://localhost:3000/motorcycles/' + $stateParams.id + '/part', vm.part)
        .then(function(response) {
          MotorcyclesService.getMotorcycles()
          console.log(response)
        })
        vm.part = {};

    }

    $scope.selectedMotorcycle = MotorcyclesService.findMotorcycles($stateParams.id)
  }
