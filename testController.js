
angular.module('examinationSystem').controller('testController' , function($rootScope , $scope,$http,$state){



console.log("..........")


var clockInterval=setInterval(function(){


$scope.$apply(function(){
	updateWatch();
})



console.log("clock" , $scope.h , $scope.min , $scope.sec)

	},1000)




var updateWatch  = function(){
	if($scope.sec==0){

	$scope.sec=59;
	if($scope.min==0){
	$scope.min=59
	$scope.h=$scope.h-1

	}
	else
	$scope.min=$scope.min-1;
	}else{
	$scope.sec=$scope.sec-1}
	if($scope.min==0){
		$scope.h=$scope.h-1;
	$scope.min=59;
}
}

	

setTimeout(function(){clearInterval(clockInterval)},1800000);
console.log('start Test' , $state.params);
	
	$scope.Ques = $state.params.test
	$scope.h= 3
	$scope.min= 00
	$scope.sec= 00
	


})