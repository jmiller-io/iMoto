angular.module('iMotoApp')
  .controller('MotorcyclesDetailController', MotorcyclesDetailController)

  MotorcyclesDetailController.$inject = ['$scope', '$stateParams', 'MotorcyclesService', '$http', '$state'];

  function MotorcyclesDetailController($scope, $stateParams, MotorcyclesService, $http, $state) {
    var vm = this;
    vm.motoEdits = {};
    $scope.tab = 1;
    $scope.showMotoInfo = true;
    $scope.showMotoEditForm = false;
    vm.deleteMotorcycles = function(motorcycle) {
      MotorcyclesService.deleteMotorcycles(motorcycle)
      $state.go('home', null, {reload: true})
    }
    vm.editMotoDetails = editMotoDetails;
    vm.saveEdits = saveEdits;
    vm.reset = reset;

    function reset() {
      $scope.showMotoInfo = true;
      $scope.showMotoEditForm = false;
    }

    function editMotoDetails() {
      $scope.showMotoInfo = false;
      $scope.showMotoEditForm = true;
    }


    function saveEdits() {
      $http
        .put('http://localhost:3000/motorcycles/' + $stateParams.id, vm.motoEdits)
        .then(function(response) {
          $state.go('home', null, { reload: true });
          MotorcyclesService.getMotorcycles()
        })
    }

    $scope.selectedMotorcycle = MotorcyclesService.findMotorcycles($stateParams.id)
  }
