define(['backbone', 'model'], function (Backbone, Contact) {
  var ContactCollection = Backbone.Collection.extend({
    url: 'http://tiy-fee-rest.herokuapp.com/collections/routingTest',
    model: Contact,
    initialize: function () {
      console.log('collection made');

    }
  });

  return ContactCollection;
});
