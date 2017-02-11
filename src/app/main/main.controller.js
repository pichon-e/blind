(function() {
  'use strict';

  angular
    .module('test')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $window) {
    var vm = this;

    $scope.hasToBeShown = false;

    $scope.show = function() {
        $scope.hasToBeShown = !$scope.hasToBeShown;
    }

    var ctx = document.getElementById("chart1");
    new Chart(ctx, {
      type: 'bar',
      backgroundColor: "#0386c3",
      data: {
        labels: [
                37877400,
                41031000,
                44184600,
                47346840,
                50500440,
                53654040,
                56807640,
                59969880,
                63123480,
                66277080,
                69430680,
                72592920,
                75746520,
                78900120,
                82053720,
                85215960,
                88369560,
                91523160,
                94676760,
                97839000,
                100992600,
                104146200,
                107299800,
                110462040,
                113615640,
                116769240,
                119922840,
                123085080,
                126238680,
                129392280,
                132545880,
                135708120,
                138861720,
                142015320,
                145168920
            ],
        datasets: [{
          label: '# of Votes',
          data: [
                    55572620,
                    55905460,
                    56166175,
                    56444748,
                    56719935,
                    57012268,
                    57325053,
                    57659542,
                    57996401,
                    58280135,
                    58571237,
                    58852002,
                    59070077,
                    59280577,
                    59487413,
                    59691177,
                    59899347,
                    60122665,
                    60508150,
                    60941410,
                    61385070,
                    61824030,
                    62251062,
                    62730537,
                    63186117,
                    63600690,
                    63961859,
                    64304500,
                    64612939,
                    64933400,
                    65241241,
                    65565000,
                    66074000,
                    66381000,
                    66627602
                ]
        }],
        options: {
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom'
            }]
          }
        }
      }
    })
  }
})();
