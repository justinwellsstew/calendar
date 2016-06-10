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
            $scope.monthNumber = date.getMonth();
            var range = CalendarRange.getMonthlyRange(new Date());

            $scope.month = range.days;        

        }

    }
});