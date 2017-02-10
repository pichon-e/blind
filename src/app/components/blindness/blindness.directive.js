(function() {
  'use strict';

  angular
    .module('test')
    .directive('blindness', blindness);

  /** @ngInject */
  function blindness() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/blindness/blindness.html',
      scope: {
      },
      controller: blindnessController
    };

    return directive;

    function blindnessController($scope, $window) {

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

      $scope.test = function() {
        console.log("test");
        var msg = new SpeechSynthesisUtterance("test");
        $window.speechSynthesis.speak(msg)
      }

      $scope.onSwipeLeft = function() {
        if ($scope.i < $scope.tab.length - 1) {
          $scope.i++;
          var msg = new SpeechSynthesisUtterance("En " + $scope.tab[$scope.i].date + "il y en avait " + $scope.tab[$scope.i].data);
          $window.speechSynthesis.speak(msg);
        }
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

  }

})();
