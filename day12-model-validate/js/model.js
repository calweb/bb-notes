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
    // add invalid listener for this model and log errors
      console.log("model created");
    },
    validate: function (attributes) {
        var errors = [];
        if(!attributes.name) {
          errors.push("Item Must have a NAME");
        }
        if(!attributes.bio) {
          errors.push("Item Must have a BIO");
        }

        return errors.length > 0 ? errors : false;
    }



  });

  return Contact;
});
