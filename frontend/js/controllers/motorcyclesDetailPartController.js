angular.module('iMotoApp')
  .controller('MotorcyclesDetailPartController', MotorcyclesDetailPartController)

  MotorcyclesDetailPartController.$inject = ['$scope', '$stateParams', 'MotorcyclesService'];
  function MotorcyclesDetailPartController($scope, $stateParams, MotorcyclesService) {
    $scope.selectedMotorcycle = MotorcyclesService.find($stateParams.id)
  }
