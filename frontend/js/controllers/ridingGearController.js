angular.module('iMotoApp')
  .controller('RidingGearController', RidingGearController)

  RidingGearController.$inject = ['$http','$state','$scope'];

  function RidingGearController($http, $state, $scope) {
    var vm = this;
    vm.allGear = [];
    vm.gear = {};
    vm.getAllGear = getAllGear;
    vm.addGear = addGear;
    vm.removeGear = removeGear;
    vm.getTemplate = getTemplate;
    vm.editItem = editItem;
    vm.selected = {};
    vm.reset = reset;
    vm.updateItem = updateItem;
    $scope.sortType = 'brand';
    $scope.sortReverse = false;

    getAllGear()
    function getAllGear() {
      $http
        .get('http://localhost:3000/gear')
        .success(function(response) {
          vm.allGear = response.gear
        })
    }

    function addGear() {
      console.log(vm.gear)
      $http
        .post('http://localhost:3000/gear', vm.gear)
        .then(function(response) {
          getAllGear()
        })
        vm.gear = {};
    }

    function removeGear(item) {
      $http
        .delete('http://localhost:3000/gear/' + item._id)
        .then(function(response) {
          let index = vm.allGear.indexOf(item);
          vm.allGear.splice(index, 1);
        })
    }

    function getTemplate(item) {
      if(item._id === vm.selected._id) {
        return 'edit';
      }
      else return 'display';
    }

    function editItem(item) {
      vm.selected = angular.copy(item)
    }

    function reset() {
      vm.selected = {};
    }

    function updateItem(item) {
      console.log('updating this item')
      let updatedGear = {
          brand: vm.selected.brand,
          model: vm.selected.model,
          price: vm.selected.price,
          category: vm.selected.category
      }
      $http
        .put('http://localhost:3000/gear/' + vm.selected._id, updatedGear)
        .then(function(response) {
          $state.go($state.$current, null, { reload: true });
        })
    }


  }
