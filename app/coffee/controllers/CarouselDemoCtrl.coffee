app = angular.module 'myApp'

class CarouselDemoCtrl extends BaseController
  @register app, "CarouselDemoCtrl"

  @inject '$scope'
 
  # initialize the controller
  initialize: ->
    @$scope.slides = [];
    @$scope.slides.push({text: 'cats!1', image: 'http://placekitten.com/300/200'});
    @$scope.slides.push({text: 'cats!2', image: 'http://placekitten.com/301/200'});
    @$scope.slides.push({text: 'cats!3', image: 'http://placekitten.com/302/200'});

