/**
 * Created by Adam on 7/10/2015.
 */

angular.module('myApp', [])
    .controller('MainCtrl', function ($log, $scope) {
        $scope.outerval = {name:"Adam",age:29};
        $scope.func = function () {
            $log.log("invoked!");
        };
    })
    .directive('iso', function () {
        return {
            template: 'Inner: {{ innerval.name }}',
            scope: {
                innerval: '=myattr',
                innerfn:'&myfunc'
            },
            link:function(scope) {
                scope.innerfn();
            }
        };
    });
