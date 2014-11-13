// contact model
// {
//   name:
//   bio:
//   description:
// }
var Contact = Backbone.Model.extend({
  defaults: {
      photo: "http://www.fillmurray.com/100/100"
  },
  initialize: function (options) {
    console.log("options in model", options);
    console.log("contact initialized");
  }
});
