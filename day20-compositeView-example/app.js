var BookApp = new Backbone.Marionette.Application();

var Book = Backbone.Model.extend({});
var Books = Backbone.Collection.extend({model: Book});

var BookView = Backbone.Marionette.ItemView.extend({
    tagName: 'li',
    template: '#book-tmpl'
});
var NoBooksView = Backbone.Marionette.ItemView.extend({
  template: '#no-book-tmpl'
});

var BooksView = Backbone.Marionette.CompositeView.extend({
  tagName: 'section',
  template: '#composite-tmpl',
  childView: BookView,
  childViewContainer: 'ul',
  emptyView: NoBooksView
});
BookApp.addRegions({
  contentRegion: '#content'
});

BookApp.addInitializer(function () {
  // var collection = new Books();
  var collection = new Books([{title: "css for babies", author: "Someone Cool"}, {title: "html for babies", author: "Someone Cool"}]);
  BookApp.contentRegion.show(new BooksView({collection: collection}));
});
$(function () {
  BookApp.start();
});
