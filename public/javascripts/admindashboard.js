var app = angular.module('dashboard1', [])
app.controller('mydashboard1', function ($scope, $http) {
$scope.worker = {};
$scope.getworkersdata = []
$scope.dailyworkersindata = []
$scope.dailyworkersoutdata = []


$scope.getdata = function(){
	$http({
		method: 'get',
		url: '/getdata'
	}).then(function(success){
		console.log(success.data)
		$scope.getworkersdata = success.data
	},function(error){
		console.log(error)
		alert(error)
	})
	$http({
		method: 'get',
		url: '/getdata1'
	}).then(function(success1){
		console.log(success1.data)
		$scope.dailyworkersindata = success1.data
	},function(error1){
		console.log(error)
		alert(error)
	})
	$http({
		method: 'get',
		url: '/getdata2'
	}).then(function(success2){
		console.log(success2.data)
		$scope.dailyworkersoutdata = success2.data
	},function(error2){
		console.log(error)
		alert(error)
	})

}

$scope.getdata1 = function(){
	
}

$scope.update = function (val) {
	$http({
		method:'post',
		url:'/updatedata',
		data:val
	}).then(function (success) {
		console.log(success)
		$scope.in = {};
		$scope.getdata()
	},function (error) {
		console.log(error)
	})
}

$scope.workerout = function(val){
	$http({
		method: 'post',
		url: '/workeroutdata',
		data: val
	}).then(function (success){
		console.log(success)
		$scope.getdata()
	},function(error){
		console.log(error)
	})
}

/*$scope.workerout = function(val){
	$http({
		method: 'post',
		url: '/workeroutdata',
		data: val
	}).then(function (success){
		console.log(success)
	},function(error){
		console.log(error)
	})
}*/

$scope.getdata2 = function(){
	
}



})