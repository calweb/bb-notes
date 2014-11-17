define(['backbone'], function (Backbone) {

  var Contact = Backbone.Model.extend({
    urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/amd',
    idAttribute: '_id',
    defaults: function () {
      return {
        photo: 'http://fillmurray.com/100/100'
      };
    },
    initialize: function () {
      console.log("model created");
    }
  });

  return Contact;
});
