define(['jquery', 'backbone', 'collection', 'modelView'], function ($, Backbone, ContactCollection, ContactView) {
  var AppView = Backbone.View.extend({
    tagName: 'section',
    className: 'page',

    initialize: function () {

      $('.container').html(this.el);


      this.render();
    },
    render: function () {

      this.addAll();
    },
    addOne: function (contact) {
      var contactView = new ContactView({model: contact});
      this.$el.append(contactView.render().el);
    },
    addAll: function () {
      _.each(this.collection.models, this.addOne, this);
    }
  });
  return AppView;
});
