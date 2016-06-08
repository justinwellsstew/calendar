angular.module('calendarDemoApp', [])

// your controller and directive code go here
.directive('calendar', function(){
	return {
            restrict: 'E',
            templateUrl: 'templates/calendar.html',
            scope: true,
      
    		controller: function($scope, $element, $attrs) {
                console.log('test directive');
            }
          }    
        });