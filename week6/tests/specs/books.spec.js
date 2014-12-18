define(function (require) {
  var Book = require('books').BookModel;
  var BookCollection = require('books').BooksCollection;

  describe('Book Model', function () {

    beforeEach(function () {
      this.myModel = new Book();
      this.bookStub = sinon.stub(this.myModel, 'save');
    });
    afterEach(function () {
      this.bookStub.restore();
    });

    it('should be an instance of Backbone.Model', function () {
      expect(this.myModel).to.be.an.instanceof(Backbone.Model);
    });

    it('should have a default photo', function () {
      expect(this.myModel.get('photo')).to.be.equal('http://33.media.tumblr.com/62bc005e281acfb64397f6a94be586f5/tumblr_neizc7qKmK1rnsoa0o1_250.jpg');
    });

    it('should have a urlRoot', function () {
      expect(this.myModel.urlRoot).to.be.equal('http://tiy-fee-rest.herokuapp.com/collections/books');
    });

    it('title should be undefined if create empty model', function () {
      expect(this.myModel.get('title')).to.be.undefined();
    });

    it('should properly set an attribute on the model', function () {
      expect(this.myModel.get('title')).to.be.undefined();

      this.myModel.set({title: 'Cool Book by Brooke'});
      expect(this.myModel.get('title')).to.be.equal('Cool Book by Brooke');
      this.myModel.set({title: 'Cool Book by Bill'});
      expect(this.myModel.get('title')).to.be.equal('Cool Book by Bill');
      expect(this.myModel.attributes).to.have.property('title');
      expect(this.bookStub).to.have.been.calledTwice;
    });

    it('should validate if title is empty and have an error property', function () {
      expect(this.myModel.validationError).to.be.a('null');
      this.myModel.set({title: ''}, {validate: true});
      expect(this.myModel.validationError).to.be.equal('Title is required');

    });


  });

  describe('Book Collection', function () {
    beforeEach(function () {

      this.modelA = new Book();
      this.modelT = new Book();
      this.modelAStub = sinon.stub(this.modelA, 'save');
      this.modelTStub = sinon.stub(this.modelT, 'save');
      this.myCollection = new BookCollection();

    });

    it('should be an instance of Backbone.Collection', function () {
      expect(this.myCollection).to.be.an.instanceof(Backbone.Collection);
    });

    it('should have correct amount of models', function () {
      this.myCollection.add([this.modelA,this.modelT]);
      expect(this.myCollection.length).to.be.equal(2);
    });

    it('should sort collection based on title', function () {
      this.modelA.set({title: 'a title', author: 'Zoolander'});
      this.modelT.set({title: 'z title', author: 'Aldous Huxley'});
      this.myCollection.add([this.modelA,this.modelT]);


      expect(this.modelAStub).to.have.been.calledOnce;
      expect(this.myCollection.at(0).get('title')).to.be.equal('a title');
    });

    it('should properly remove models from collection', function () {
      this.myCollection.add([this.modelA,this.modelT]);
      expect(this.myCollection.length).to.be.equal(2);
      this.myCollection.remove(this.modelA);
      expect(this.myCollection.length).to.be.equal(1);
    });

    describe('Collection Fetch', function () {
      before(function () {
        this.ajaxStub = sinon.stub($, 'ajax').yieldsTo('success', [
        { title: 'Book Title', author: 'A Person'},
        { title: 'Another Book Title', author: 'Copycat'}
        ]);
        this.bookCollection = new BookCollection();
      });

      it('should have correct amount of models in book collection', function () {
        expect(this.bookCollection.length).to.be.zero;
        this.bookCollection.fetch();
        expect(this.bookCollection.length).to.be.equal(2);
      });
      it('should have right data in each model', function () {
        this.bookCollection.fetch();
        expect(this.bookCollection.at(0).get('title')).to.be.equal('Another Book Title');
        expect(this.bookCollection.at(1).get('author')).to.be.equal('A Person');
      });


    });


  });


});
