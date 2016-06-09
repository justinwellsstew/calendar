angular.module('calendarDemoApp', [])

// your controller and directive code go here
.directive('calendar', function(){
	return {
            restrict: 'E',
            templateUrl: 'templates/calendar.html',
            scope: true,
      
    		controller: function($scope, $element, $attrs, $sce) {
                var today = new Date();
                var year = today.getFullYear();
                var month = today.getMonth();
                var range = CalendarRange.getMonthlyRange(new Date());
                var monthRange = range.days;
                console.log(range);


    		$scope.years = [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]	
            $scope.months = ["January", "February" , "March", "April", "May", "June", "July", "August", "September","October", "November", "December"]; 
            $scope.weekdays = ["sun","mon","tues", "wed", "thurs", "fri", "sat"];   
                console.log('test directive');

                var displayMonth = "";
                angular.forEach(monthRange, function(value, key){
                    if(key%7 == 0) {
                       $scope.displayMonth += '</tr><tr>';
                    }
                    displayMonth = displayMonth + '<td>'+ $scope.weekdays[key%7]+ ' ' +value.day+ '</td>';
                });

               $watch(angular.element('#calendar').html(displayMonth));

            }
            
          }    
        });