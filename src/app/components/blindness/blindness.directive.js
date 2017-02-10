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
      controller: blindnessController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function blindnessController($scope, $window) {
      var vm = this;

      vm.i = 0;
      vm.tab = [
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
        if (vm.i < vm.tab.length - 1) {
          vm.i++;
          var msg = new SpeechSynthesisUtterance("En " + vm.tab[vm.i].date + "il y en avait " + vm.tab[vm.i].data);
          $window.speechSynthesis.speak(msg);
        }
      }

      $scope.onSwipeRight = function() {
        if (vm.i > 0) {
          vm.i--;
          var msg = new SpeechSynthesisUtterance("En " + vm.tab[vm.i].date + "il y en avait " + vm.tab[vm.i].data);
          $window.speechSynthesis.speak(msg);
        }
      }

      $scope.onSwipeUp = function() {
        console.log("haut");
      }
    }

  }

})();
