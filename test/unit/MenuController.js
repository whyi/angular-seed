// Generated by CoffeeScript 1.7.1
(function() {
  beforeEach(module('myApp'));

  describe("MenuController", function() {
    var HTTP_OK, MENU_JSON_API_PATH, SAMPLE_MENU_JSON, givenAjaxCallReturns, httpBackend, menuController, scope, thenAjaxCallIsMadeTo, thenLoadMenuJsonIsCalled, thenMenuJsonInScopeIs, whenInitialize, whenLoadMenuJson;
    HTTP_OK = 200;
    menuController = null;
    httpBackend = null;
    scope = null;
    beforeEach(inject(function($controller, $rootScope, $http, $httpBackend) {
      scope = $rootScope.$new();
      httpBackend = $httpBackend;
      return menuController = $controller("MenuController", {
        $scope: scope
      });
    }));
    MENU_JSON_API_PATH = "api/menuJson";
    SAMPLE_MENU_JSON = {
      menuItems: [
        {
          "title": "view1"
        }, {
          "title": "view2"
        }
      ]
    };
    givenAjaxCallReturns = function(json) {
      return httpBackend.expectGET(MENU_JSON_API_PATH).respond(HTTP_OK, json);
    };
    whenInitialize = function() {
      spyOn(menuController, "loadMenuJson");
      return menuController.initialize();
    };
    whenLoadMenuJson = function() {
      httpBackend.expectGET(MENU_JSON_API_PATH);
      return menuController.loadMenuJson();
    };
    thenLoadMenuJsonIsCalled = function() {
      return expect(menuController.loadMenuJson).toHaveBeenCalled();
    };
    thenAjaxCallIsMadeTo = function(endpoint) {
      httpBackend.flush();
      return expect(true).toBe(false);
    };
    thenMenuJsonInScopeIs = function(json) {
      httpBackend.flush();
      return expect(scope.menuJson).toBe(json);
    };
    describe("when initialize", function() {
      beforeEach(function() {
        return whenInitialize();
      });
      return it("calls loadMenuJson()", function() {
        return thenLoadMenuJsonIsCalled();
      });
    });
    describe("when load menu json", function() {
      beforeEach(function() {
        return whenLoadMenuJson();
      });
      return it("should make ajax call to" + MENU_JSON_API_PATH, function() {
        return thenAjaxCallIsMadeTo(MENU_JSON_API_PATH);
      });
    });
    return describe("given ajax call to " + MENU_JSON_API_PATH + " is successful", function() {
      beforeEach(function() {
        return givenAjaxCallReturns(SAMPLE_MENU_JSON);
      });
      return describe("when load menu json", function() {
        beforeEach(function() {
          return whenLoadMenuJson();
        });
        return it("should set the json to scope", function() {
          return thenMenuJsonInScopeIs(SAMPLE_MENU_JSON);
        });
      });
    });
  });

}).call(this);
