//Backbone Models, Backbone Views, Backbone Collections
// Backbone Router, and Backbone Events

// Backbone Constructor
var TodoModel = Backbone.Model.extend({
  defaults: {
    title: "Default Title",
    isComplete: false
  },
  initialize: function () {
    console.log("this instance was created.");
    this.on("change:isComplete", function () {
      console.log("something in our model has changed");
    });
  }
});
