define(function (require) {
  var Book = require('books').BookModel;
  var BooksCollection = require('books').BooksCollection;
  var BookView = require('views').BookView;
  var FormView = require('views').FormView;
  var $fixture =  $('<div>').attr('id', 'fixture').css('display', 'none').appendTo('body');

  describe('Book View', function () {
    beforeEach(function () {
      this.book = new Book();
      this.bookView = new BookView({model: this.book});
    });
    describe('Template Tests',function () {
      beforeEach(function () {
        this.book.set({ title: 'A book title'});
        this.bookView.render();
      });
      it('rendered view equals adds title', function () {

        expect(this.bookView.$el.find('h2').text()).to.have.a.string('A book title');
        expect(this.bookView.$el.find('img').attr('alt')).to.have.a.string('A book title');
      });
      it('rendered view does not have content', function () {
        expect(this.bookView.$el.find('p').eq(0).text()).to.be.equal('');
      });
      it('setting model will update the view when rendered', function () {
        this.book.set({author: 'Brook'});
        this.bookView.render();
        expect(this.bookView.$el.find('p').eq(1).text()).to.be.equal('Author: Brook');

      });
    });
    describe('Event Tests', function () {
      beforeEach(function () {
      $fixture =  $('<div>').attr('id', 'fixture').css('display', 'none').appendTo('body');
        this.bookStub = sinon.stub(this.book, 'destroy');
        this.bookView.render();
      });
      afterEach(function () {
        $fixture.remove();
      });

      it('should delete when clicking delete button', function () {
        $fixture.append(this.bookView.el);
        $fixture.find('button').click();

        expect($fixture.html()).to.be.empty;
        expect(this.bookStub).to.have.been.calledOnce;
      });
    });
  });

  describe('Form View', function () {
    before(function () {
      this.bookModel = new Book();
      this.bookCollection = new BooksCollection();
      this.formView = new FormView({model: this.bookModel, collection: this.bookCollection});
    });
      // test the template
        // test form elements for all data in book model
        // test the button's existence
      it('should have instance of form view', function () {
        expect(this.formView).to.be.an.instanceOf(FormView);
      });

    describe('Template', function () {
        before(function () {
          this.formView.render();
        });
        it('should have a button to submit the new book', function () {
          expect(this.formView.$el.find('button')).to.exist;
          expect(this.formView.$el.find('button').text()).to.equal('Create Post');
        });
        it('should have all of the form fields for our book model', function () {
          // title, content, photo, author, pubdate
          expect(this.formView.$el.find('input#title')).to.exist;
          expect(this.formView.$el.find('textarea#content')).to.exist;
          expect(this.formView.$el.find('input#photo')).to.exist;
          expect(this.formView.$el.find('input#author')).to.exist;
          expect(this.formView.$el.find('input#pubDate')).to.exist;
        });
    });

    describe('Events', function () {
      before(function () {

      });
      describe('createBook method', function () {
        beforeEach(function () {
          this.saveBook = sinon.stub(this.bookModel, 'save');
          $fixture.append(this.formView.el);
        });
        afterEach(function () {
          this.saveBook.restore();
          // $fixture.remove();
        });
        it('saves the model', function () {
          $fixture.find('button').click();
          expect(this.saveBook).to.be.calledOnce;
        });
        it('collection gets another model', function () {
          expect(this.formView.collection.length).to.be.zero;
          $fixture.find('button').click();
          expect(this.formView.collection.length).to.be.equal(1);
        });

        it('form fields should be cleared after click', function () {
          $fixture.find('input, textarea').val('value');
          $fixture.find('button').click();
          expect(this.formView.$el.find('input, textarea').val()).to.be.equal('');

        });

        it('create book method adds all book attributes to model', function () {
          $fixture.find('input, textarea').val('value');
          $fixture.find('button').click();
          expect(this.bookModel.get('title')).to.equal('value');
        });

      });

    });
      // test the events
        // test the createBook method in our view
            // all the data in our form elements are gathered to create a new book
            // a new book model is saved
            // form elements are cleared of data
  });

});
