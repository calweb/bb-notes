define(['backbone', 'jquery', 'utils', 'MenuItem', 'templates'], function (Backbone, $, utils, MenuItem) {
  var FooterView = Backbone.View.extend({
    template: "footer",

    initialize: function () {
      this.render();
    },
    render: function () {
      var self = this;
      var dfd = $.Deferred();

      utils.dustRender(this.template, {}).then(function (html) {
        self.$el.html(html);
        dfd.resolve(self.el);
      });

      return dfd.promise();
    }
  });

  return FooterView;
});
