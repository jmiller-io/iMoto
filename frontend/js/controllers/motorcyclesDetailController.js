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
      console.log('hi from funct')
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
      // $http
      //   .post('http://127.0.0.1:3000/motorcycles', vm.newMotorcycle)
      //   .then(function(response) {
      //     $state.go('home', null, { reload: true });
      //     MotorcyclesService.getMotorcycles()
      //   })
      // vm.newMotorcycle = {};
    }



    // function editMoto(motorcycle) {
    //   var $form = $('<form ng-submit="motorcycle.saveEdits()">');
    //   var $forminputmotoyear = $(`<label for="year">Year:</label><input type="number" name="year" value="${motorcycle.year}" ng-model="motorcycle.editMotorcycle.year">`)
    //   $forminputmotoyear.appendTo($form)
    //   var $forminputmotomake = $(`<label for="make">Make:</label><input type="text" name="make" value="${motorcycle.make}" ng-model="motorcycle.editMotorcycle.make">`)
    //   $forminputmotomake.appendTo($form)
    //   var $forminputmotomodel = $(`<label for="model">Model:</label><input type="text" name="model" value="${motorcycle.model}" ng-model="motorcycle.editMotorcycle.model">`)
    //   $forminputmotomodel.appendTo($form)
    //   var $formSave = $('<input class="btn" type="submit" value="Save">')
    //   $formSave.appendTo($form)
    //   $('#motoInfoTable').replaceWith($form)
    // }

    $scope.selectedMotorcycle = MotorcyclesService.findMotorcycles($stateParams.id)
  }
