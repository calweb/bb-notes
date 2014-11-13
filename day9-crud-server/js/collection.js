var ContactCollection = Backbone.Collection.extend({
  url: "http://tiy-fee-rest.herokuapp.com/collections/bfcrud",
  model: Contact,
  initialize: function () {
    // this.on('remove', this.remove, this);
  },
  remove: function (model) {
    model.trigger('hide');
  }

});
