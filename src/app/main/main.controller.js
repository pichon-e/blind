(function() {
  'use strict';

  angular
    .module('test')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $window) {
    var vm = this;

    $scope.i = 0;
    $scope.tab = [
      {
        date: 1950,
        data: 50
      },
      {
        date: 1960,
        data: 190
      },
      {
        date: 1970,
        data: 1500
      },
      {
        date: 1980,
        data: 456842
      }
    ];

    $scope.onSwipeLeft = function() {
      if ($scope.i < $scope.tab.length - 1) {
        $scope.i++;
        var msg = new SpeechSynthesisUtterance("En " + $scope.tab[$scope.i].date + "il y en avait " + $scope.tab[$scope.i].data);
        $window.speechSynthesis.speak(msg);      }
    }

    $scope.onSwipeRight = function() {
      if ($scope.i > 0) {
        $scope.i--;
        var msg = new SpeechSynthesisUtterance("En " + $scope.tab[$scope.i].date + "il y en avait " + $scope.tab[$scope.i].data);
        $window.speechSynthesis.speak(msg);
      }
    }

    $scope.onSwipeUp = function() {
      console.log("haut");
    }
  }
})();
