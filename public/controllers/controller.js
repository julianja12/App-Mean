var myApp = angular.module('myApp', ['ui.bootstrap']);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
console.log("Hello World from controller");

var refresh = function(){
	$http.get('/ListaContactos').success(function(response) {
	$scope.ListaContactos = response;
	console.log("Se han obtenido los datos solicitados");
	$scope.contact = "";
	});
};

refresh();

//Metodo para guardar Contactos se comunica con el servidor
$scope.addContact = function() {
console.log($scope.contact);
$http.post('/ListaContactos',$scope.contact).success(function(response){

console.log(response);
refresh();
});
};

//Metodo para guardar Clientes se comunica con el servidor
$scope.addCliente = function() {
console.log($scope.Client);
$http.post('/ListaClientes',$scope.Client).success(function(response){
console.log(response);
});
};

//Metodo para Formulario Principal se comunica con el servidor
$scope.addFormulario= function() {
console.log($scope.Form);
$http.post('/FormularioPrincipal',$scope.Form).success(function(response){

console.log(response);

});
};


$scope.remove = function(id){

	console.log(id);
	$http.delete('/ListaContactos/' + id).success(function(response){

		refresh();
	});
};

$scope.edit = function(id){
	console.log(id);
	$http.get('/ListaContactos/' + id).success(function(response){
		$scope.contact = response;
	});

};

$scope.update = function(){
console.log($scope.contact._id);
	$http.put('/ListaContactos/' + $scope.contact._id, $scope.contact).success(function(response){
		refresh();

	});
};

$scope.deselect = function(){

	$scope.contact = "";
};

var _selected;
$scope.selected = undefined;
$scope.LClientes= ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];


}]);


angular.module('myApp').controller('ModalContactoCtrl', function ($scope, $uibModal, $log) {

 $scope.OpenContacto = function () {

      var modalInstance = $uibModal.open({
      templateUrl: 'NuevoContacto.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {}
      });
    };


 $scope.OpenCliente = function () {

      var modalInstance = $uibModal.open({
      templateUrl: 'NuevoCliente.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {}
      });
    };

});

angular.module('myApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {


$scope.ok = function () {
	    $uibModalInstance.close();
	  };


});
