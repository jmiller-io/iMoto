angular.module('iMotoApp')
  .controller('MotorcyclesDetailController', MotorcyclesDetailController)

  MotorcyclesDetailController.$inject = ['$scope', '$stateParams', 'MotorcyclesService', '$http', '$state'];

  function MotorcyclesDetailController($scope, $stateParams, MotorcyclesService, $http, $state) {
    var vm = this;
    vm.editMotorcycle = {};
    $scope.tab = 1;
    vm.addPart = addPart;
    vm.addServiceRecord = addServiceRecord;
    vm.serviceRecord = {};
    vm.editServiceRecord = editServiceRecord;
    vm.updateServiceRecord = updateServiceRecord;
    vm.removeServiceRecord = removeServiceRecord;
    vm.part = {};
    vm.editPart = editPart;
    vm.updatePart = updatePart;
    vm.selected = {};
    vm.selectedServiceRecord = {};
    vm.getTemplate = getTemplate;
    vm.getServiceRecordTemplate = getServiceRecordTemplate;
    vm.reset = reset
    vm.removePart = removePart;
    vm.deleteMotorcycles = function(motorcycle) {
      MotorcyclesService.deleteMotorcycles(motorcycle)
    }

    function reset() {
      vm.selected = {};
      vm.selectedServiceRecord = {};
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

    function getServiceRecordTemplate(serviceRecord) {
      if(serviceRecord._id === vm.selectedServiceRecord._id) {
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

    function addServiceRecord() {
      $http
        .post('http://localhost:3000/motorcycles/' + $stateParams.id + '/serviceRecord', vm.serviceRecord)
        .then(function(response) {
          $state.go('home', null, { reload: true });
          MotorcyclesService.getMotorcycles()
        })
        vm.serviceRecord = {};

    }

    function removeServiceRecord(serviceRecord) {
      //console.log(MotorcyclesService.motorcycles)
      $http
        .delete('http://localhost:3000/motorcycles/' + $stateParams.id + '/serviceRecord/' + serviceRecord._id)
        .then(function(response) {
          $state.go('home', null, { reload: true });
          MotorcyclesService.getMotorcycles()
        })
    }

    function editServiceRecord(serviceRecord) {
      vm.selectedServiceRecord = angular.copy(serviceRecord)
    }

    function updateServiceRecord(serviceRecord) {
      console.log('updating this service record')
      console.log(vm.selectedServiceRecord)
      let updatedServiceRecord = {
          description: vm.selectedServiceRecord.description,
          performedAt: vm.selectedServiceRecord.performedAt,
          cost: vm.selectedServiceRecord.cost,
          Date: vm.selectedServiceRecord.Date,
      }
      $http
        .put('http://localhost:3000/motorcycles/' + $stateParams.id + '/serviceRecord/' + serviceRecord._id, updatedServiceRecord)
        .then(function(response) {
          $state.go('home', null, { reload: true });
          MotorcyclesService.getMotorcycles()
        })
    }

    $scope.selectedMotorcycle = MotorcyclesService.findMotorcycles($stateParams.id)
  }
