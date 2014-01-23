'use strict';

/**
 * Firebase Controller
 */

angular.module('lcboApp.controllers').
    controller('FirebaseCtrl', ['$scope', '$http', '$firebase',  function($scope, $http, $firebase) {

        var todoRef = new Firebase('https://shining-fire-4513.firebaseio.com');

        // Automatically syncs everywhere in realtime
        $scope.todo = $firebase(todoRef);

        $scope.addTodo = function() {
            console.log('hello world');

            // AngularFire $add method
            $scope.todo.$add({date: new Date, note: $scope.note});
            $scope.note = '';
        }
    }]);