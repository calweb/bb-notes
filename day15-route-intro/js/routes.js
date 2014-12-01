define(['backbone', 'jquery','model', 'modelView', 'collection', 'collectionView', 'aboutView', 'contactAddView'], function (Backbone, $, Contact, ModelView, ContactCollection, CollectionView, AboutView, ContactAddView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'home',
      'home': 'home',
      'about': 'about',
      'add': 'addContact',
      '*path': 'notDefined'

    },
    initialize: function () {

    },
    home: function () {
      var self = this;
      var collection = new ContactCollection();
      collection.fetch().then(function () {
        self.loadView(new CollectionView({ collection: collection}));
      });

    },
    about: function () {
      this.loadView(new AboutView());
    },
    notDefinedRoute: function () {
      console.log("page not defined or not found");
    },
    addContact: function () {
      var contact = new Contact();
      this.loadView(new ContactAddView({model: contact}));
    },
    loadView: function (view) {
      this.view && this.view.remove();
      this.view = view;
    }
  });

  return AppRouter;
});
