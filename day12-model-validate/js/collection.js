define(['backbone', 'Contact'], function (Backbone, Contact) {
    var ContactCollection = Backbone.Collection.extend({
      model: Contact,
      url: 'http://tiy-fee-rest.herokuapp.com/collections/amd',
      initialize: function () {
        console.log('collection created');
      }
    });

    return ContactCollection;
});
