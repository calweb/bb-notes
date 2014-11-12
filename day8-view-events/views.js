// backbone view
// model view
var ContactView = Backbone.View.extend({
  // will expect a model on instantiation
  tagName: "article",
  template: _.template($("#contactTemplate").html()),
  events: {
    // <event> <element>: <method>
    "click .deleteContact": "deleteModel"
  },
  initialize: function () {
    console.log("contact view made");

  },
  render: function () {
    console.log(this.model.toJSON());
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  deleteModel: function () {
    this.$el.remove();
    this.model.destroy();
  }

});


// collection view (app view)
var ContactsView = Backbone.View.extend({
   // you must add a collection on instantiation of the view
   el: $("#contacts"),
   events: {
     "click .createContact": "showCreateForm",
     "click .createItem": "createContact"
   },
   formTemplate: _.template(),
   initialize: function () {
     console.log("collection view created");
    //  this.collection.on("add", this.alert, this)
     this.listenTo(this.collection.models, "add", this.alert);
     this.render();
   },
   alert: function () {
     alert("hello");
   },
   renderForm: function () {

   },
   render: function () {
     this.addAllContacts();
   },
   showCreateForm: function () {
     this.$el.find(".profileForm").addClass("editing");
   },
   createContact: function () {
     var rawForm = {
       name: this.$el.find(".createName").val(),
       bio: this.$el.find(".createBio").val(),
       description: this.$el.find(".createDescription").val()
     };
     var newContact = new Contact(rawForm);
     this.collection.add(newContact);
     this.addContact(newContact);
     this.$el.find(".createName").val("");
     this.$el.find(".createBio").val("");
     this.$el.find(".createDescription").val("");
     this.$el.find(".profileForm").removeClass("editing");

   },
   addContact: function (contact) {
     var contactView = new ContactView({model: contact});
     this.$el.append(contactView.render().el);
   },
   addAllContacts: function () {
     _.each(this.collection.models, this.addContact, this);
   }

});
