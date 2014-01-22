'use strict';

/**
 *  Weather Widget Directive
 */

var _ = require('underscore');

angular.module('lcboApp.directives').
    directive('appWeatherWidget', [function() {

        var url = 'http://api.openweathermap.org/data/2.5/forecast/daily';

        return {
            restrict: 'E', // E = Element, A = Attribute
            scope: {
                city: '@',
                collapsed: '@'
            },
            transclude: true,
            templateUrl: 'views/templates/weather-template.html',
            controller: ['$scope', '$http', '$filter', function($scope, $http, $filter) {
                /* Directive Controller */

                _.extend($scope, {
                    weather: [],
                    cityInfo: {}
                });

                /* Example of accessing $http service */
                $scope.getTemp = function(city) {
                    $http({
                        method: 'JSONP',
                        url: url,
                        params: {
                            mode: 'json',
                            units: 'celsius',
                            cnt: 7,
                            callback: 'JSON_CALLBACK',
                            q: city
                        }
                    }).success(function(data) {
                        $scope.cityInfo = data.city;
                        console.log(data);

                        _.each(data.list, function(day) {
                            $scope.chart.labels.push($filter('moment')(day.dt, 'ddd'));
                            $scope.chart.datasets[0].data.push(day.temp.day - 273.15);
                            $scope.chart.datasets[1].data.push(day.temp.night - 273.15);
                        });
                    });
                }
            }],
            link: function($scope, element, attrs) {
                /* Setup ChartJS Options */
                $scope.chart = {
                    labels: [],
                    datasets: [
                        {
                            fillColor: 'rgba(151,187,205,0)',
                            strokeColor: '#e67e22',
                            pointColor: 'rgba(151,187,205,0)',
                            pointStrokeColor: '#e67e22',
                            data: []
                        },
                        {
                            fillColor: 'rgba(151,187,205,0)',
                            strokeColor: '#f1c40f',
                            pointColor: 'rgba(151,187,205,0)',
                            pointStrokeColor: '#f1c40f',
                            data: []
                        }
                    ],
                };

                $scope.getTemp(attrs.city);
            }
        }
    }]);