var app = angular.module("app", []);
app.directive('star', function () {
  return {
    template: '<ul class="rating">' +
        '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
        '\u2605' +
        '</li>' +
        '</ul>',
    scope: {
      ratingValue: '=',
      max: '=',
      readonly: '@',
      onRatingSelected: '&'
    },
    link: function (scope, elem, attrs) {
      elem.css("text-align", "center");
      scope.ratingValue = scope.ratingValue || 0;
      scope.max = scope.max || 5;
      var updateStars = function () {
        scope.stars = [];
        for (var i = 0; i < scope.max; i++) {
          scope.stars.push({
            filled: i < scope.ratingValue
          });
        }
      };
      updateStars();
      scope.toggle = function (index) {
        if (scope.readonly && scope.readonly === 'true') {
          return;
        }
        //freeze rating while display
        //scope.ratingValue = index + 1;
        scope.onRatingSelected();
      };
 
      scope.$watch('ratingValue', function (oldVal, newVal) {
        if (newVal) {
          updateStars();
        }
      });
    }
  };
});