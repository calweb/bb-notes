define(['jquery', 'backbone', 'marionette', 'books', 'views'], function ($, Backbone, Marionette, Books, Views) {


    var BooksApp = new Marionette.Application();

    BooksApp.addRegions({
      appViewRegion: '#app'
    });

    // add initializer
    BooksApp.addInitializer(function () {
      var booksCollection = new Books.BooksCollection();
      booksCollection.fetch().then(function () {

        var contentView = new Views.ContentLayoutView();

        BooksApp.appViewRegion.show(contentView);
        contentView.header.show(new Views.HeaderView());
        contentView.footer.show(new Views.FooterView());
        contentView.content.show(new Views.BooksView({collection: booksCollection }));
        contentView.sidebar.show(new Views.FormView({collection: booksCollection}));

      });
    });

    return BooksApp;
});
