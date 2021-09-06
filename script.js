var myApp = angular.module("myList", []);
myApp.controller("myListController",function ($scope) {
  $scope.Activities = ["9 am -10 am  Confrence", "10:30 am - 11:50 am  Presentation", "12 pm - 1 pm  Report Submission","1 pm - 2 pm LUNCH"];


  var today = new Date().toDateString();
  document.getElementById('time').innerHTML=today;





  $scope.newActivities = "";

  $scope.pushActivities = function () {
    if($scope.newActivities != ""); {
      $scope.Activities.push($scope.newActivities);
      $scope.newActivities = "";
    }


  }
  $scope.deleteActivities = function(index) {
    $scope.Activities.splice(index, 1);
  }
});
