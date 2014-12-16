require.config({
  baseUrl: '../',
  paths: {
    'jquery'        : 'node_modules/jquery/dist/jquery',
    'underscore'    : 'node_modules/underscore/underscore',
    'backbone'      : 'node_modules/backbone/backbone',
    'mocha'         : 'node_modules/mocha/mocha',
    'chai'          : 'node_modules/chai/chai',
    'chai-jquery'   : 'node_modules/chai-jquery/chai-jquery',
    'models'        : 'public/js/books',
    'views'         : 'public/js/views'
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
    }
  }
});

define(['jquery', 'mocha', 'chai', 'chai-jquery'],function($, mocha, chai, chaiJquery) {

  // Chai
  expect = chai.expect;
  chai.use(chaiJquery);
  // chai.use(sinonChai);


  require([
    'specs/books.spec.js',
    'specs/views.spec.js'
    ], function(require) {

        mocha.run();

    });

  });
