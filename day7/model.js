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
  initialize: function () {
    console.log("contact initialized");
  }
});
