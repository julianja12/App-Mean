angular.module('myApp').controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

 $scope.open = function () {

      var modalInstance = $uibModal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {}
      });
    };

});

angular.module('myApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

$scope.ok = function () {
    $uibModalInstance.close('Guardar');
  };

$scope.cancel = function () {
    $uibModalInstance.dismiss('Cancelar');
  };

});

