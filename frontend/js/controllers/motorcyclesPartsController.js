angular.module('iMotoApp')
  .controller('MotorcyclesPartsController', MotorcyclesPartsController)

  MotorcyclesPartsController.$inject = ['$scope', '$stateParams', 'MotorcyclesService', '$http', '$state'];

  function MotorcyclesPartsController($scope, $stateParams, MotorcyclesService, $http, $state) {
    var vm = this;
    vm.partsList = [];
    vm.addPart = addPart;
    vm.part = {};
    vm.editPart = editPart;
    vm.updatePart = updatePart;
    vm.selected = {};
    vm.getTemplate = getTemplate;
    vm.reset = reset
    vm.removePart = removePart;

    function reset() {
      vm.selected = {};
    }

    function removePart(part) {
      //console.log(MotorcyclesService.motorcycles)
      $http
        .delete('http://localhost:3000/motorcycles/' + $stateParams.id + '/part/' + part._id)
        .then(function(response) {
          $state.go('home', null, { reload: true });
          MotorcyclesService.getMotorcycles()
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
      $http
        .post('http://localhost:3000/motorcycles/' + $stateParams.id + '/part', vm.part)
        .then(function(response) {
          $state.go('home', null, { reload: true });
          MotorcyclesService.getMotorcycles()
        })
        vm.part = {};
    }

    $scope.selectedMotorcycle = MotorcyclesService.findMotorcycles($stateParams.id)
  }
