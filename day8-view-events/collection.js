// ContactCollection

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  initialize: function () {
    console.log("contact collection initialized!");
  }
});
