define(['jquery', 'backbone', 'collection', 'modelView'], function ($, Backbone, ContactCollection, ContactView) {
  var AboutView = Backbone.View.extend({
    tagName: 'section',
    className: 'about',
    template: _.template($('#aboutTmpl').html()),
    events: {
      'click': 'alert'
    },
    initialize: function () {
      $('.container').html(this.el);
      this.render();
      console.log(this.render().el);
    },
    render: function () {
      this.$el.html(this.template());
      return this;
    },
    alert: function () {
      alert('hello!');
    }
  });
  return AboutView;
});
