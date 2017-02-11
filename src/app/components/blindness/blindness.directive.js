(function() {
  'use strict';

  angular
    .module('test')
    .directive('blindness', blindness);

  /** @ngInject */
  function blindness() {
    var directive = {
      scope: {
        dataset: '=',
        isShown: '@'
      },
      controller: ['$scope', '$mdDialog', '$window', blindnessController]
    };

    return directive;

    function blindnessController($scope, $mdDialog, $window, dataset, isShown) {
      console.log('dataset', $scope.dataset);
      var confirm = $mdDialog.confirm({
        controller: ['$scope', '$mdDialog', '$window', 'dataset', 'isShown', function($scope, $mdDialog, $window, dataset, isShown) {

          $scope.dataset = dataset;
          $scope.isShown = isShown;
          $scope.i = 0;

          $scope.close = function() {
            console.log("up");
            $scope.isShown = false;
            $mdDialog.hide();
          };
        }],
        templateUrl: 'app/components/blindness/blindness.html',
        locals: {
          dataset: $scope.dataset,
          isShown: $scope.isShown
        }
      });

      $mdDialog.show(confirm).then(function() {
        $scope.isShown = false;
      });

      $scope.onSwipeUp = function() {
        console.log("haut");
      }
    }

  }

})();
