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

    new Chart(document.getElementById("chart1"), {
      type: 'bar',
      backgroundColor: "#0386c3",
      data: {
        labels: [
                1982,
                1983,
                1984,
                1985,
                1986,
                1987,
                1988,
                1989,
                1990,
                1991,
                1992,
                1993,
                1994,
                1995,
                1996,
                1997,
                1998,
                1999,
                2000,
                2001,
                2002,
                2003,
                2004,
                2005,
                2006,
                2007,
                2008,
                2009,
                2010,
                2011,
                2012,
                2013,
                2014,
                2015,
                2016
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

    new Chart(document.getElementById("chart2"), {
      type: 'bar',
      backgroundColor: "#0386c3",
      data: {
        labels: [
            1982,
            1983,
            1984,
            1985,
            1986,
            1987,
            1988,
            1989,
            1990,
            1991,
            1992,
            1993,
            1994,
            1995,
            1996,
            1997,
            1998,
            1999,
            2000,
            2001,
            2002,
            2003,
            2004,
            2005,
            2006,
            2007,
            2008,
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015
        ],
        datasets: [{
            label: 'Solde naturel',
            data: [
                272536,
                207686,
                237170,
                235745,
                250805,
                260401,
                268033,
                258574,
                258685,
                257191,
                244941,
                200773,
                212653,
                218745,
                219425,
                218117,
                224497,
                228530,
                266804,
                262205,
                247504,
                230577,
                279891,
                268741,
                302432,
                287543,
                285829,
                276100,
                281581,
                278337,
                251179,
                242274,
                259300,
                200000
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
