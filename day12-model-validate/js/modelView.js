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
      'click .updateContact': 'updateContact',
      'click .revertContact': 'revertContact'
      // revert contact

    },
    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
      // listenTo this model for invalid
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
    invalid: function (model, err, opts) {
      console.log(model,err,opts);
    },
    toggleEdit: function () {
      console.log(this.model);
      this.$el.toggleClass('editing');
    },
    updateContact: function () {
      this.model.set({
        name: this.$el.find('.editName').val(),
        bio: this.$el.find('.editBio').val(),
        description: this.$el.find('.editDescription').val()
      }, {validate: true});
      this.model.save();
      console.log(this.model.previous('name'));
      this.toggleEdit();
    },
    revertContact: function () {
      if(this.model.hasChanged()) {
        this.model.set(this.model.previousAttributes(), {validate: true});
        this.model.save();
        return;
      }
      this.$el.find('.revertContact').text("nothing has changed!!");
    }
    // add revertContact method if model.hasChanged() using model.previousAttributes()
  });

  return ContactView;
});
