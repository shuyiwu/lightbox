define([], function() {
	'use strict';
  angular.module('lightbox').controller('HomeController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {

      $scope.box = {};

      $scope.progressValue = 0;
      $scope.completedStyle = '';

      $scope.lightBoxShow = false;

      $http.get('data/data.json').then(function(result) {
          $scope.box = result.data.data.lightbox;
          $scope.startProgress($scope.box);
          $scope.lightBoxShow = true;
      });
      $scope.loadLightBox = function(){
          $scope.lightBoxShow = true;
          $scope.startProgress($scope.box);
      };
      $scope.hideModal = function() {
          $scope.lightBoxShow = false;
      };

      $scope.isCompleted = function() {
          return   $scope.progressValue >= $scope.box.finish;
      };

      var stop;
      $scope.startProgress = function(data){
          $scope.progressValue = data.start;
          $scope.completedStyle = '';
          stop = $interval(function() {
              $scope.progressValue += 1;
              if($scope.progressValue === data.finish){
                $scope.completedStyle = 'completed';
                $interval.cancel(stop);
                stop = undefined;
              }
          }, data.duration/(data.finish - data.start));
      };

  }]);
});
