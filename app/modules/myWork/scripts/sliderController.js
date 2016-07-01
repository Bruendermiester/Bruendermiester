
angular.module('slider', ['ngAnimate'])
    .controller('sliderController', function ($scope, $timeout) {
        $scope.slides = [
        	{image: 'modules/myWork/images/Serp.png', description: 'Image 03'},
          {image: 'modules/myWork/images/MetaData_view.png', description: 'Image 00'},
          {image: 'modules/myWork/images/Monatization_view.png', description: 'Image 01'},
          {image: 'modules/myWork/images/RelatedData_view.png', description: 'Image 02'},
          {image: 'modules/myWork/images/Social_view.png', description: 'Image 04'},
          {image: 'modules/myWork/images/Signals-6-30-16.png', description: 'Image 00'},
          {image: 'modules/myWork/images/Signals-searchpage-6-30-16.png', description: 'Image 04'},
          {image: 'modules/myWork/images/Signals-searchpage-data-view-6-30-16.png', description: 'Image 01'},
          {image: 'modules/myWork/images/Signals-searchpage-listview-6-30-16.png', description: 'Image 02'}
        ];

        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function(index) {
        	$scope.currentIndex = index;
        }

        $scope.isCurrentSlideIndex = function(index) {
        	return $scope.currentIndex === index;
        }

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.next = function() {
     	 timeOut = $timeout(function() {
         $scope.nextSlide();
         $scope.next();
     	 }, 2000);
		};
		$scope.next();


    })
	.animation('.slide-animation', function () {
	        return {
	            beforeAddClass: function (element, className, done) {
	                var scope = element.scope();

	                if (className == 'ng-hide') {
	                    var finishPoint = element.parent().width();
	                    if(scope.direction !== 'right') {
	                        finishPoint = -finishPoint;
	                    }
	                    TweenMax.to(element, 4, {left: finishPoint, onComplete: done });
	                }
	                else {
	                    done();
	                }
	            },
	            removeClass: function (element, className, done) {
	                var scope = element.scope();

	                if (className == 'ng-hide') {
	                    element.removeClass('ng-hide');

	                    var startPoint = element.parent().width();
	                    if(scope.direction === 'right') {
	                        startPoint = -startPoint;
	                    }

	                    TweenMax.fromTo(element, 4, { left: startPoint }, {left: 0, onComplete: done });
	                }
	                else {
	                    done();
	                }
	            }
	        };
	    });
