(function() {
  'use strict';

  angular
    .module('test')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $window) {
    var vm = this;

    $scope.hasToBeShown1 = false;
    $scope.hasToBeShown2 = false;

    $scope.show1 = function() {
        $scope.hasToBeShown1 = !$scope.hasToBeShown1;
    }

    $scope.show2 = function() {
        $scope.hasToBeShown2 = !$scope.hasToBeShown2;
    }

    $scope.chart1Value = {
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
    }

    new Chart(document.getElementById("chart1"), {
      type: 'bar',
      backgroundColor: "#0386c3",
      data: {
        labels: $scope.chart1Value.labels,
        datasets: [{
          label: '# of Votes',
          data: $scope.chart1Value.data
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

    $scope.title1 = "Evolution de la population française entre 1982 et 2016";
    $scope.title2 = "Solde naturel en france entre 1982 et 2015";

    $scope.chart2Value = {
        labels :[
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
    }

    new Chart(document.getElementById("chart2"), {
      type: 'bar',
      backgroundColor: "#0386c3",
      data: {
        labels: $scope.chart2Value.labels,
        datasets: [{
            label: 'Solde naturel',
            data: $scope.chart2Value.data
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
