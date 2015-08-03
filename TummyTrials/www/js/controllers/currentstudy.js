(angular.module('tummytrials.currentstudy',['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
	.state('no_study', {
      url: '/no_study',
      views: {
        settings : {
          templateUrl: 'templates/currenttrial/no_study.html',
          controller: 'setupcontroller'
        }
      }
    })    
  .state('during', {
      url: '/during',
      views: {
        settings : {
          templateUrl: 'templates/currenttrial/during.html',
          controller: 'setupcontroller'
        }
      }
    })     
  .state('post', {
      url: '/post',
      views: {
        settings : {
          templateUrl: 'templates/currenttrial/post.html',
          controller: 'setupcontroller'
        }
      }
    }) 
  .state('notes', {
      url: '/notes',
      views: {
        settings : {
          templateUrl: 'templates/currenttrial/notes.html',
          controller: 'setupcontroller'
        }
      }
    }) 

  })

.controller('slidercontroller', function($scope) {
  
  $scope.lazyArray = [
        {value : "A"},{value : "B"},{value : 2},{value : 3},{value : 4}  
    ];
    
    $scope.slider = {};
    $scope.slider.rangeValue = 0;
    
    $scope.$watch('slider.rangeValue',function(val,old){
       $scope.slider.rangeValue = parseInt(val);
    });
    
    $scope.rangeFilter = function(number) {
        return (number.value > $scope.slider.rangeValue);
    }
})

);