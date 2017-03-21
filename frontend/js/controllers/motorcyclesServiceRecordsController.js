angular.module('iMotoApp')
  .controller('MotorcyclesServiceRecordsController', MotorcyclesServiceRecordsController)

  MotorcyclesServiceRecordsController.$inject = ['$scope', '$stateParams', 'MotorcyclesService', '$http', '$state'];

  function MotorcyclesServiceRecordsController($scope, $stateParams, MotorcyclesService, $http, $state) {
    var vm = this;
    vm.editMotorcycle = {};
    $scope.tab = 1;
    vm.addServiceRecord = addServiceRecord;
    vm.serviceRecord = {};
    vm.editServiceRecord = editServiceRecord;
    vm.updateServiceRecord = updateServiceRecord;
    vm.removeServiceRecord = removeServiceRecord;
    vm.selected = {};
    vm.selectedServiceRecord = {};
    vm.getServiceRecordTemplate = getServiceRecordTemplate;
    vm.reset = reset

    function reset() {
      vm.selected = {};
      vm.selectedServiceRecord = {};
    }



    function getServiceRecordTemplate(serviceRecord) {
      if(serviceRecord._id === vm.selectedServiceRecord._id) {
        return 'edit';
      }
      else return 'display';
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
