// booyaaaaaaaaaaaaaaaaaaā


// globals for demo
var people;
var appView;
$(function () {
  //we need to create collection from our raw data
  // so we can do backbone things with it
  people = new ContactCollection(contacts);

  // instantiate our collection view
  appView = new ContactsView({collection: people});
});
