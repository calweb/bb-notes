define(['jquery', 'backbone', 'model', 'router'], function ($, Backbone, Contact, Router) {
  var ContactAddView = Backbone.View.extend({
    tagName: 'article',
    template: _.template($('#newContact').html()),
    events: {
      'click .save': 'save'
    },
    initialize: function () {
      $('.container').html(this.el);
      this.render();

    },
    render: function () {
      console.log(this.model);
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    save: function () {
      this.model.set({
        name: this.$el.find('.newName').val(),
        bio: this.$el.find('.newBio').val(),
        description: this.$el.find('.newDescription').val()
      });
      this.model.save();

      App.router.navigate('home', true);
    }
  });
  return ContactAddView;
});
