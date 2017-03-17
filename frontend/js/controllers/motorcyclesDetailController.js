angular.module('iMotoApp')
  .controller('MotorcyclesDetailController', MotorcyclesDetailController)

  MotorcyclesDetailController.$inject = ['$scope', '$stateParams', 'MotorcyclesService', '$http', '$state'];

  function MotorcyclesDetailController($scope, $stateParams, MotorcyclesService, $http, $state) {
    var vm = this;
    vm.editMotorcycle = {};
    $scope.tab = 1;
    vm.addPart = addPart;
    vm.part = {};
    vm.editPart = editPart;
    vm.updatePart = updatePart;
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

    function updatePart(part) {
      console.log('updating this part')
      let updatedPart = {
          manufacturer: vm.selected.manufacturer,
          description: vm.selected.description,
          cost: vm.selected.cost,
          partNumber: vm.selected.partNumber,
          installDate: vm.selected.installDate
      }
      $http
        .put('http://localhost:3000/motorcycles/' + $stateParams.id + '/part/' + part._id, updatedPart)
        .then(function(response) {
          $state.go('home', null, { reload: true });
          MotorcyclesService.getMotorcycles()
        })
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
          console.log(response)
        })
        vm.part = {};

    }

    $scope.selectedMotorcycle = MotorcyclesService.findMotorcycles($stateParams.id)
  }
