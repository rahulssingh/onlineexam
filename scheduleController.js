angular.module('examinationSystem')

.controller('scheduleController' , function($scope,$http,$state){


$scope.scheduleController = function(){
	
	$http({
		method:'POST',
		url:'/date',
		params:{
			date:$scope.date,
			course:$scope.course,
			Subject :$scope.Subject
		
		
		}
	})
	.then(function(response){
		console.log("data inserted");
			$scope.date=null;
			$scope.course=null;
			$scope.Subject=null;
			

	})
}




})