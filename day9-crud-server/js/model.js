var Contact = Backbone.Model.extend({
  // base url for crud operations on your model
  // Backbone will wire up the CRUD stuff for you, if your endpoint is RESTful
  // Model.save() - POST /urlRoot (if its a new model)
  // Model.save() - PUT /urlRoot/:id (if model exists)
  // Model.fetch() - GET /urlRoot/:id (must already have id attribute)
  // Model.destroy() - DELETE /urlRoot/:id 
  urlRoot: "http://tiy-fee-rest.herokuapp.com/collections/bfcrud",
  idAttribute: "_id",
  defaults: {
    photo: "http://fillmurray.com/100/100"
  }
});
