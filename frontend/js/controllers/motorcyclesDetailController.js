angular.module('iMotoApp')
  .controller('MotorcyclesDetailController', MotorcyclesDetailController)

  MotorcyclesDetailController.$inject = ['$scope', '$stateParams', 'MotorcyclesService'];

  function MotorcyclesDetailController($scope, $stateParams, MotorcyclesService) {
    var vm = this;
    vm.editMotorcycle = {};
    $scope.tab = 1;

    vm.deleteMotorcycles = function(motorcycle) {
      MotorcyclesService.deleteMotorcycles(motorcycle)
    }

    $scope.selectedMotorcycle = MotorcyclesService.findMotorcycles($stateParams.id)
  }
