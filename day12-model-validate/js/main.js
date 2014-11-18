
// configure requirejs

// AMD Ansynchronous Module Definition
// You must configure requirejs before you use it elsewhere
require.config({
  // baseUrl defines in what relation the path to your scripts.
  // if baseUrl is not defined, then all paths are in relation
  // to the main.js file.
  baseUrl: '/',
  // paths property is an object defining the name of modules
  // to use throughout your application
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

require(['ContactsView', 'ContactCollection', 'jquery'], function (ContactsView,ContactCollection, $) {

  $(function () {
    var contacts = new ContactCollection();
    contacts.fetch().then(function () {
        var appView = new ContactsView({collection:contacts});
    });

  });
});
