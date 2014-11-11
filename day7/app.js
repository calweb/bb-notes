var people;
var appView;
$(function () {
  people = new ContactCollection(contacts);
  appView = new ContactsView({collection: people});
});
