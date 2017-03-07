angular.module('iMotoApp')
  .controller('MotorcyclesDetailController', MotorcyclesDetailController)

  MotorcyclesDetailController.$inject = ['$scope', '$stateParams', 'MotorcyclesService'];
  function MotorcyclesDetailController($scope, $stateParams, MotorcyclesService) {
    $scope.selectedMotorcycle = MotorcyclesService.findMotorcycles($stateParams.id)
  }
