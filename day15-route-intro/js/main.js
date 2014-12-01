
require.config({
  baseUrl: '/',
  paths: {
      'jquery': 'node_modules/jquery/dist/jquery',
      'underscore': 'node_modules/underscore/underscore',
      'backbone': 'node_modules/backbone/backbone',
      'model': 'js/model',
      'collection': 'js/collection',
      'collectionView': 'js/collectionView',
      'modelView': 'js/modelView',
      'appView': 'js/appView',
      'aboutView': 'js/aboutView',
      'contactAddView': 'js/contactAddView',
      'router': 'js/routes'
  }
});

require(['jquery', 'backbone', 'router'], function ($, Backbone, Router) {
  window.App = {};
  window.App.router = new Router();

  Backbone.history.start();


});
