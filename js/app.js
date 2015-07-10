/**
 * Created by Adam on 7/10/2015.
 */
angular.module('myApp', [])
    .directive('parentDirective', function ($log) {
        return {
            controller: function () {
                this.identify = function () {
                    $log.log('Parent!');
                };
            }
        };
    })
    .directive('siblingDirective', function ($log) {
        return {
            controller: function () {
                this.identify = function () {
                    $log.log('Sibling!');
                };
            }
        };
    })
    .directive('childDirective', function ($log) {
        return {
            require: ['^parentDirective', '^siblingDirective'],
            link: function (scope, el, attrs, ctrls) {
                ctrls[0].identify();
                // Parent!
                ctrls[1].identify();
                // Sibling!
            }
        };
    });