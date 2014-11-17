define(['backbone', 'jquery','underscore', 'Contact'], function (Backbone, $, _, Contact) {
  var ContactView = Backbone.View.extend({
    tagName: 'article',
    template: _.template($('#contactTemplate').html()),
    initialize: function () {
      this.render();
    },
    render: function () {
      var markup = this.template(this.model.toJSON());
      this.$el.html(markup);
      return this;
    }
  });

  return ContactView;
});
