// angular.module('iMotoApp')
//   .controller('MotorcyclesController', MotorcyclesController)


//   MotorcyclesController.$inject = ['MotorcyclesService', '$scope'];

//   function MotorcyclesController(MotorcyclesService, $scope) {
//     $scope.motorcycles = MotorcyclesService.list();
//     // var self = this;
//     // self.all = [];
//     // self.getMotorcycles = getMotorcycles;

//     // getMotorcycles();
//     // function getMotorcycles() {
//     //   $http
//     //     .get('http://localhost:3000/motorcycles')
//     //     .then(function(response) {
//     //       self.all = response.data.motorcycles;
//     //       console.log(JSON.stringify(response.data.motorcycles))
//     //     });
//     // }

//     // function getMotorcycle(oid) {
//     //   for (var i = 0; i < self.all.length; i++) {
//     //     if (self.all[i]._id == oid) {
//     //       return self.all[i]
//     //     }
//     //   }
//     // }
//   }


// New Navbar
angular.module('iMotoApp')
  .controller('MotorcyclesDropDownController', MotorcyclesDropDownController)


  function MotorcyclesDropDownController($scope, MotorcyclesService, $http) {
    var vm = this;
    vm.motorcycles = [];
    vm.newMotorcycle = {};
    vm.getMotorcycles = function () {

      MotorcyclesService.getMotorcycles()
      .success(function (response) {
        vm.motorcycles = response.motorcycles
      })
    };
    vm.getMotorcycles();
  }






























