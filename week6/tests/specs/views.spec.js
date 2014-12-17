define(function (require) {
  var Book = require('books').BookModel;
  var BookView = require('views').BookView;
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
        $('<div>').attr('id', 'fixture').css('display', 'none').appendTo('body');
        // this.bookStub = sinon.stub(this.book, 'destroy');
        this.bookView.render();

      });
      afterEach(function () {
        $('#fixture').remove();
      });

      it('should delete when clicking delete button', function () {
        $('#fixture').append(this.bookView.el);
        $('#fixture').find('button').click();


        expect($('#fixture').html()).to.be.empty;
        expect(this.bookView.model).to.be.undefined;

      });


    });
  });


});
