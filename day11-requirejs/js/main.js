
// configure requirejs

// AMD Ansynchronous Module Definition

require.config({
  baseUrl: '/',
  paths: {
    "jquery": "node_modules/jquery/dist/jquery",
    "underscore": "node_modules/underscore/underscore",
    "backbone": "node_modules/backbone/backbone",
    "Contact": "js/model",
    "ContactCollection": "js/collection",
    "ContactView": "js/modelView",
    "ContactsView": "js/collectionView"
  }
});

require(['ContactsView', 'jquery'], function (ContactsView, $) {

  $(function () {
    var appView = new ContactsView();
  });
});
