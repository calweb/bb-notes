var people;
var appView;
$(function () {
  people = new ContactCollection();

  // Will not work. Need promises.
  // people.fetch();
  // appView = new ContactsView({collection: people});

  people.fetch().done(function (peeps) {
      console.log(peeps); // peeps is just an array, not Backbone collection
      appView = new ContactsView({collection: people});
  });



});
