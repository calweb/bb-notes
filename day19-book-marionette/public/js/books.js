define(['backbone'], function (Backbone) {

  var Book = Backbone.Model.extend({
    defaults: function () {
      return {
        photo: 'http://33.media.tumblr.com/62bc005e281acfb64397f6a94be586f5/tumblr_neizc7qKmK1rnsoa0o1_250.jpg'
      }
    },
    idAttribute: '_id',
    urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/books'
  });

  var Books = Backbone.Collection.extend({
    model: Book,
    url: 'http://tiy-fee-rest.herokuapp.com/collections/books',
    comparator: function (model) {
      return model.get('title');
    }
  });

  return {
    BookModel: Book,
    BooksCollection: Books
  };
});
