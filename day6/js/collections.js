// Collections

var TodoCollection = Backbone.Collection.extend({
  model:TodoModel,
  initialize: function () {
    console.log("collection initialized");

    this.on("add", function(item) {
      console.log("item was added", item.toJSON());
    });
    
  }
});
