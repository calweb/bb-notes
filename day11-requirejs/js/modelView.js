// if, in your require.config did not create names for all the files, just libraries
// you would reference the dependencies like so:
// define('backbone', 'jquery', 'underscore', 'js/model')
define(['backbone', 'jquery','underscore', 'Contact'], function (Backbone, $, _, Contact) {
  var ContactView = Backbone.View.extend({
    tagName: 'article',
    template: _.template($('#contactTemplate').html()),
    events: {
      'click .destroy': 'remove',
      'click .editItem': 'toggleEdit',
      'click .updateContact': 'updateContact'
    },
    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
      this.render();
    },
    render: function () {
      var markup = this.template(this.model.toJSON());
      this.$el.html(markup);
      return this;
    },
    remove: function () {
      this.$el.remove();
      this.model.destroy();
    },
    toggleEdit: function () {
      this.$el.toggleClass('editing');
    },
    updateContact: function () {
      this.model.set({
        name: this.$el.find('.editName').val(),
        bio: this.$el.find('.editBio').val(),
        description: this.$el.find('.editDescription').val()
      });
      this.model.save();
      this.toggleEdit();
    }
  });

  return ContactView;
});
