var Post = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/today'
});

var Posts = Backbone.Collection.extend({
  model: Post,
  url: 'http://tiy-fee-rest.herokuapp.com/collections/today'
});

var PostView = Backbone.Marionette.ItemView.extend({
  template: '#postViewTmpl'
});
var HeaderView = Backbone.Marionette.ItemView.extend({
  template: '#headerViewTmpl'
});

var FooterView = Backbone.Marionette.ItemView.extend({
  template: '#footerViewTmpl'
});

var EmptyView = Backbone.Marionette.ItemView.extend({
  template: '#emptyViewTmpl'
});

var FormView = Backbone.Marionette.ItemView.extend({
  template: '#formViewTmpl',
  events: {
    'click button': 'createPost'
  },
  ui: {
    title: '#title',
    content: '#content'
  },
  createPost: function () {
    var newPost = new Post({
      title: this.ui.title.val(),
      content: this.ui.content.val()
    });
    newPost.save();
    this.collection.add(newPost);
    this.ui.title.val("");
    this.ui.content.val("");
  }
});

var PostsView = Backbone.Marionette.CollectionView.extend({
  childView: PostView,
  emptyView: EmptyView
});

var ContentLayoutView = Backbone.Marionette.LayoutView.extend({
  template: '#contentViewTmpl',
  regions: {
      content: '#content',
      sidebar: '#sidebar'
  }
});


var BlogApp = new Backbone.Marionette.Application();

BlogApp.addRegions({
  headRegion: 'header',
  footRegion: 'footer',
  contentRegion: '.row'
});

// add initializer
BlogApp.addInitializer(function () {
  var postsCollection = new Posts();
  postsCollection.fetch().then(function () {

    BlogApp.headRegion.show(new HeaderView());
    BlogApp.footRegion.show(new FooterView());

    var contentView = new ContentLayoutView();
    BlogApp.contentRegion.show(contentView);

    contentView.content.show(new PostsView({collection: postsCollection }));
    contentView.sidebar.show(new FormView({collection: postsCollection}));

  });


});



BlogApp.start();
