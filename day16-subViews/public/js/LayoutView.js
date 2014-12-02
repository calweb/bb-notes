define(['backbone', 'jquery', 'HeaderView', 'FooterView'], function (Backbone, $, HeaderView, FooterView) {
  var LayoutView = Backbone.View.extend({
    el:"#layout",
    render: function() {
      var headMarkup, footerMarkup;
      this.header = new HeaderView().render().then(function (html) {
        console.log(html);
        headMarkup = html;
      });
      this.footer = new FooterView().render().then(function (html) {
        footerMarkup = html;
      });
      this.$("#header").html(headMarkup);
      this.$("#footer").html(footerMarkup);
      return this;
    },

    renderSubview: function(view) {
      var self = this;
      if(this.subView)
        this.subView.remove();
        this.subView = view;
        this.subView.render().then(function (html) {
          self.$("#container").html(html);
        });

      }
    });
    return LayoutView;
  });
