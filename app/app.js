angular.module('calendarDemoApp', [])

// your controller and directive code go here
.directive('calendar', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/calendar.html',
        scope: true,

        controller: function($scope, $element, $attrs, $sce) {

            // create todays date
            var date = new Date();

            //get year number to create years dropdown menu
            var yearNumber = date.getFullYear();

            //get default value for year
            $scope.selectedYear = yearNumber;

            //get default value for month
            $scope.selectedMonth = date.getMonth();

            //get default month (this month)
            var range = CalendarRange.getMonthlyRange(new Date($scope.selectedYear, $scope.selectedMonth, 1));
            $scope.daysOfMonth = range.days;

            // create range of years
            var years = [];
            for (var i = yearNumber - 10; i <= yearNumber + 10; i++) {
                years.push(i);

            }

            // add years to scope
            $scope.years = years;

            //create months for array
            $scope.months = [{
                month: 'Jan',
                number: 0
            }, {
                month: 'Feb',
                number: 1
            }, {
                month: 'March',
                number: 2
            }, {
                month: 'Apr',
                number: 3
            }, {
                month: 'May',
                number: 4
            }, {
                month: 'June',
                number: 5
            }, {
                month: 'July',
                number: 6
            }, {
                month: 'Aug',
                number: 7
            }, {
                month: 'Sept',
                number: 8
            }, {
                month: 'Oct',
                number: 9
            }, {
                month: 'Nov',
                number: 10
            }, {
                month: 'Dec',
                number: 11
            }, ];

            //create days of the week
            $scope.weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

            // var selectedDate =  new Date($scope.selectedMonth $scope.selectedYear)
            var date = new Date();
            $scope.monthNumber = date.getMonth();
            $scope.yearNumber = date.getYear();


            $scope.change = function() {

                var range = CalendarRange.getMonthlyRange(new Date($scope.selectedYear, $scope.selectedMonth, 1));
                $scope.daysOfMonth = range.days;

            }
        }
    }
});