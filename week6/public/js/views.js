define(['jquery','backbone', 'marionette', 'dust', 'app', 'books', 'marionette-dust', 'templates'], function ($, Backbone, Marionette, dust, BooksApp, Books) {
  var BookView = Marionette.ItemView.extend({
    template: 'book-view',
    events: {
      'click button': 'delete'
    },
    delete: function () {
      this.$el.remove();
      this.model.destroy();
    }
  });
  var HeaderView = Marionette.ItemView.extend({
    template: 'header-view',
    initialize: function () {
      console.log("hello");
    }
  });
  var HelpView = Marionette.ItemView.extend({
    template: 'help-view'
  });
  var AboutView = Marionette.ItemView.extend({
    template: 'about-view'
  });
  var FooterView = Marionette.ItemView.extend({
    template: 'footer-view'
  });

  var EmptyView = Marionette.ItemView.extend({
    template: 'no-books'
  });

  var FormView = Marionette.ItemView.extend({
    template: 'form-view',
    events: {
      'click button': 'createBook'
    },
    ui: {
      title: '#title',
      content: '#content',
      photo: '#photo',
      author: '#author',
      pubDate: '#pubDate'
    },
    createBook: function () {
      var newPost = new Books.BookModel({
        title: this.ui.title.val(),
        content: this.ui.content.val(),
        photo: this.ui.photo.val(),
        author: this.ui.author.val(),
        pubDate: this.ui.pubDate.val()
      });
      newPost.save();
      this.collection.add(newPost);
      this.ui.title.val('');
      this.ui.content.val('');
      this.ui.photo.val('');
      this.ui.author.val('');
      this.ui.pubDate.val('');
    }
  });

  var BooksView = Marionette.CollectionView.extend({
    childView: BookView,
    emptyView: EmptyView
  });

  var ContentLayoutView = Marionette.LayoutView.extend({
    template: 'content-view',
    regions: {
      header: 'header',
      footer: 'footer',
      content: '#content',
      sidebar: '#sidebar'
    },
    initialize: function() {
      this.initRouter();
    },
    onRender: function() {
      // if( ! Backbone.History.started)
    },
    initRouter: function() {

      var self = this;

      // assign route handlers to specific routes.
      // In this case, 'home' is triggered when the browser
      // visits index.html#home. Likewise index.html#info.
      // the empty set is for an address with no hash.
      var routes = {
        '' : 'onHomeRoute',
        'home' : 'onHomeRoute',
        'addBook' : 'onAddBook',
        'about': 'onAbout'
      };


      var appRouterController = {
        onHomeRoute: function() {
          self.onHomeNavigated();
        },
        onAddBook: function() {
          self.addBookNavigated();
        },
        onAbout: function () {
          self.content.show(new AboutView());
        }
      };

      // define an AppRouter constructor
      // and assign the routes and controller
      var router = Marionette.AppRouter.extend({
        appRoutes: routes,
        controller: appRouterController
      });

      // create a new instance of the AppRouter
      var appRouter = new router();
    },
    onAboutNavigated: function () {
      this.content.show(new AboutView());
    },


    onHomeNavigated: function() {
      console.log("hello from home navigated");
      var self = this;
      var booksCollection = new Books.BooksCollection();
      booksCollection.fetch().then(function () {
        self.content.show(new BooksView({collection: booksCollection}));
        self.sidebar.show(new FormView({collection: booksCollection}));
      });

    },


    addBookNavigated: function() {
      console.log("hello from info navigated");

      this.content.show(new FormView({collection: this.collection}));
      this.sidebar.show(new HelpView());

    }
  });

  return {
    BookView: BookView,
    BooksView: BooksView,
    HeaderView: HeaderView,
    FooterView: FooterView,
    FormView: FormView,
    EmptyView: EmptyView,
    ContentLayoutView: ContentLayoutView
  };
});
