(function() {

  angular.module('app')
    .controller('ViewController', ['$scope', ViewController]);
  
  function ViewController($scope) {
    $scope.$on("$viewContentLoaded", function () {
        sr.reveal('.astronaut', {
            duration: 1500,
            origin: 'top',
            distance: '50px',
            reset: false
        });

        sr.reveal('.text-blurb', {
            duration: 1500,
            origin: 'top',
            distance: '50px',
            reset: false
        });
    });    
  }

}());