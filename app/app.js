angular.module('calendarDemoApp', [])

// your controller and directive code go here
.directive('calendar', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/calendar.html',
        scope: true,

        controller: function($scope, $element, $attrs, $sce) {


            // create years
            $scope.years = [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]

            //create months
            $scope.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            //create days of the week
            $scope.weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];




            // var selectedDate =  new Date($scope.selectedMonth $scope.selectedYear)
            var date = new Date();
            var month = date.getMonth();
            console.log(month);
            var range = CalendarRange.getMonthlyRange(new Date());
            var monthRange = range.days;
            console.log(range);



            var displayMonth = "";

            angular.forEach(monthRange, function(value, key) {

                if (key == 0) {
                    displayMonth += '<tr>'
                } else if (key % 7 == 0 && key != 0 && key != monthRange.length) {
                    displayMonth += '</tr><tr>';
                }
                displayMonth = displayMonth + '<td>' + $scope.weekdays[key % 7] + ' ' + value.day + '</td>';
                if (key == monthRange.length) {
                    displayMonth += "</tr>";
                }
            });

            // angular.element(document).find('#calendar').html(displayMonth);

            $scope.displayMonth = displayMonth;



        }

    }
});