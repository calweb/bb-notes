require.config({
  // baseUrl: '',
  paths: {
    'jquery'        : 'lib/jquery/dist/jquery',
    'underscore'    : 'lib/underscore/underscore',
    'backbone'      : 'lib/backbone/backbone',
    'marionette'    : 'lib/backbone.marionette/lib/backbone.marionette',
    'dustjs-linkedin': 'lib/dustjs-linkedin/dist/dust-full',
    'marionette-dust': 'lib/marionette-dust/src/amd/backbone.marionette.dust',
    'templates'     : '../public/js/lib/compiled-amd',
    'sinon'         : 'lib/sinon/lib/sinon-1.12.2',
    'sinon-chai'    : 'lib/sinon-chai/lib/sinon-chai',
    'mocha'         : 'lib/mocha/mocha',
    'chai'          : 'lib/chai/chai',
    'chai-jquery'   : 'lib/chai-jquery/chai-jquery',
    'books'        : '../public/js/books',
    'views'         : '../public/js/views',
    'app'           : '../public/js/app'
  },
  shim: {
    'mocha': {
      init: function () {
        this.mocha.setup('bdd');
        return this.mocha;
      },
      'sinon' : {
        exports : "sinon"
      },
      'chai-jquery': ['jquery', 'chai']
    },
    'marionette': { 'deps': ['backbone'], 'exports': 'Marionette'},
    'bootstrap' : { 'deps': ['jquery'] },
    'dustjs-linkedin': { 'exports': 'dust'},
  },
  map: {
    '*': {
      'dust': 'dustjs-linkedin'
    }
  }
});

define(['jquery', 'mocha', 'chai', 'chai-jquery', 'sinon', 'sinon-chai'],function($, mocha, chai, chaiJquery, sinon, sinonChai) {

  // Chai
  expect = chai.expect;
  chai.use(chaiJquery);
  chai.use(sinonChai);


  require([
    'specs/books.spec.js',
    'specs/views.spec.js'
    ], function(require) {

      if (typeof mochaPhantomJS !== "undefined") { mochaPhantomJS.run(); }
        else { mocha.run(); }

    });

  });
