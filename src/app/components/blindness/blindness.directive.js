(function() {
  'use strict';

  angular
    .module('test')
    .directive('blindness', blindness);

  /** @ngInject */
  function blindness() {
    var directive = {
      scope: {
      },
      controller: ['$scope', '$mdDialog', '$window', blindnessController]
    };

    return directive;

    function blindnessController($scope, $mdDialog, $window) {

      var confirm = $mdDialog.confirm({
        controller: ['$scope', '$mdDialog', '$window', function($scope, $mdDialog, $window) {

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

          $scope.ok = function() {
            $mdDialog.hide();
          };
          $scope.close = function() {
            console.log("close");
            $mdDialog.hide();
          };
        }],
        templateUrl: 'app/components/blindness/blindness.html'
      });

      $mdDialog.show(confirm).then(function() {

      });

      $scope.onSwipeUp = function() {
        console.log("haut");
      }
    }

  }

})();
