define([
  'backbone',
  'jquery',
  'underscore',
  'ContactCollection',
  'ContactView',
  'Contact' ],
  function (Backbone, $, _, ContactCollection, ContactView, Contact) {

  var ContactsView = Backbone.View.extend({
    el: $("#contacts"),
    events: {
      'click .addProfile': 'toggleCreate',
      'click .createProfile': 'createProfile'
    },
    initialize: function () {

      var self = this;
      if(!this.collection) {
        this.collection = new ContactCollection();
      }
      this.addAll();
      this.listenTo(this.collection, 'add', this.addOne);

    },
    render: function () {
      this.addAll();
    },
    addOne: function (contact) {
      var modelView = new ContactView({model: contact});
      this.$el.append(modelView.render().el);

    },
    addAll: function () {
      _.each(this.collection.models, this.addOne, this);
    },
    toggleCreate: function () {
      this.$el.find('.profileForm').toggleClass('editing');
    },
    createProfile: function () {
      var newProfile = {
        name: this.$el.find('.newName').val(),
        bio: this.$el.find('.newBio').val(),
        description: this.$el.find('.newDescription').val()
      };
      var newModel = new Contact(newProfile);
      newModel.save();
      this.collection.add(newModel);
      this.$el.find('.profileForm input').val("");
      this.toggleCreate();
    }
  });

  return ContactsView;
});
