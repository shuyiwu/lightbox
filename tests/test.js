/**
 * Created by shuyi on 13/07/2016.
 */

var assert = chai.assert;

describe('homeController test', function () {

  var scope;
  var ctrl;

  window.beforeEach(function() {
    module('lightbox');
  });

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('HomeController', {$scope: scope});
  }));

  describe('get json data', function(){

    beforeEach( function ( done ) {
      fixture = document.createElement( 'div' );
      document.body.appendChild( fixture );
      setTimeout( function() {
        done();
      }, 2000 );
    });

    it('should get json data', function(){

      assert.equal(typeof scope.box, 'object');
      assert.equal(scope.box.start, 0);
      assert.equal(scope.box.finish, 100);
      assert.equal(scope.box.duration, 2000);
    });
  });

  describe('display light box', function(){
    it('close dialog', function(){
      scope.hideModal();
      assert.equal(scope.lightBoxShow, false);
    });
    it('close dialog', function(){
      scope.loadLightBox();
      assert.equal(scope.lightBoxShow, true);
    });
  });

  describe('progression bar display', function(){

    afterEach( function ( done ) {
      fixture = document.createElement( 'div' );
      document.body.appendChild( fixture );
      setTimeout( function() {
        done();
      }, 2000 );
    });
    it('start progression', function(){
      scope.startProgress();
      assert.equal(scope.progressValue, 0);
      assert.equal(scope.completedStyle, '');
    });
    it('completed progression', function(){
      scope.loadLightBox();
      assert.equal(scope.progressValue, 100);
      assert.equal(scope.completedStyle, 'completed');
    });
  });

});
