var app = angular.module('myapp', []);

app.controller('ControllerName', ['$scope', function($scope) {
    //this is controller code
    var vm = this; //refers to controller in html
    vm.test = 'This is a test';
    // $scope.test = 'This is the test!';
  }]);
