require.config({
  baseUrl: '../',
  paths: {
    'jquery'        : 'node_modules/jquery/dist/jquery',
    'underscore'    : 'node_modules/underscore/underscore',
    'backbone'      : 'node_modules/backbone/backbone',
    'marionette'    : 'node_modules/backbone.marionette/lib/backbone.marionette',
    'dustjs-linkedin': 'node_modules/dustjs-linkedin/dist/dust-full',
    'marionette-dust': 'node_modules/marionette-dust/src/amd/backbone.marionette.dust',
    'templates'     : 'public/js/lib/compiled-amd',
    'sinon'         : 'node_modules/sinon/lib/sinon-1.12.2',
    'sinon-chai'    : 'node_modules/sinon-chai/lib/sinon-chai',
    'mocha'         : 'node_modules/mocha/mocha',
    'chai'          : 'node_modules/chai/chai',
    'chai-jquery'   : 'node_modules/chai-jquery/chai-jquery',
    'books'        : 'public/js/books',
    'views'         : 'public/js/views',
    'app'           : 'public/js/app'
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

      mocha.run();

    });

  });
  
