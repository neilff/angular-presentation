'use strict';

/**
 * Home Controller
 */

var _ = require('underscore');

angular.module('lcboApp.controllers').
    controller('ApiCtrl', ['$scope', 'ApiService', '$filter',  function($scope, ApiService, $filter) {

        $scope.retrieveProducts = function (page) {
            var config = {
                url: 'products',
                params: {
                    page: (page) ? page : 1,
                    q: ($scope.search) ? $filter('replaceSpaces')($scope.search) : ''
                }
            };

            return ApiService.makeApiRequest(config).success(function(data) {
                _.extend($scope, {
                    products: data.result,
                    totalItems: data.pager.total_record_count,
                    currentPage: data.pager.current_page,
                    numPages: data.pager.final_page
                });
            });
        };

        $scope.selectPage = function (num) {
            $scope.currentPage = num;
            $scope.retrieveProducts(num);
        }

        $scope.init = function () {
            _.extend($scope, {
                config: {
                    title: 'Example API Service Call'
                },
                search: '',
                order: 'id',
                reverse: false,
                totalItems: 0,
                currentPage: 1,
                maxSize: 16,
                numPages: 0,
                itemsPerPage: 20
            });

            $scope.retrieveProducts();
        };
    }]);