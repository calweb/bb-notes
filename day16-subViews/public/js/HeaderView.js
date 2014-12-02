define(['backbone', 'jquery', 'utils', 'MenuItem', 'templates'], function (Backbone, $, utils, MenuItem) {
  var HeaderView = Backbone.View.extend({
    template: "header",
    initialize: function () {

      this.render();
      console.log('header view created', this.el);
    },

    render: function () {
      var self = this;
      var dfd = $.Deferred();

      utils.dustRender(this.template, {partialName: 'header'}).then(function (html) {
        self.$el.html(html);
        dfd.resolve(self.el);
      });

      return dfd.promise();
    }
  });

  return HeaderView;
});
