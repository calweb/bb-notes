define(['backbone', 'jquery','AppView', 'ItemFormView', 'templates'], function (Backbone, $, AppView, ItemFormView) {
  var AppRouter = Backbone.Router.extend({
      initialize: function (options) {
        this.layout = options.layout;
        console.log(options.foo);
      },
      routes: {
        '': 'home',
        'addItem': 'addItem'
      },
      home: function () {
        this.layout.renderSubview(new AppView());
      },
      addItem: function () {

        this.layout.renderSubview(new ItemFormView());
      }
  });

  return AppRouter;

});
