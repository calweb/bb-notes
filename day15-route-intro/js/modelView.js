define(['jquery', 'backbone', 'model'], function ($, Backbone, Contact ) {
  var ContactView = Backbone.View.extend({
    tagName: 'article',
    template: _.template($('#contactTemplate').html()),

    initialize: function () {
      this.render();

    },
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
  return ContactView;
});
