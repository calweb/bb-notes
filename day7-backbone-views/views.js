// backbone view
// model view
var ContactView = Backbone.View.extend({
  // will expect a model on instantiation
  tagName: "article",
  template: _.template($("#contactTemplate").html()),
  initialize: function () {
    console.log("contact view made");
  },
  render: function () {
    console.log(this.model.toJSON());
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});


// collection view (app view)
var ContactsView = Backbone.View.extend({
   // you must add a collection on instantiation of the view
   el: $("#contacts"),
   initialize: function () {
     console.log("collection view created");
     this.render();
   },
   render: function () {
     this.addAllContacts();
   },
   addContact: function (contact) {
     var contactView = new ContactView({model: contact});
     this.$el.append(contactView.render().el);
   },
   addAllContacts: function () {
     _.each(this.collection.models, this.addContact, this);
   }

});
