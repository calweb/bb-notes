define(['backbone', 'backbone-validation'], function (Backbone) {
	var MenuItem = Backbone.Model.extend({
		idAttribute: "_id",
		urlRoot: "http://tiy-fee-rest.herokuapp.com/collections/kgoggin",
		validation: {
			name: {
				required: true
			},
			description: {
				required: true
			},
			price: {
				required: true,
				pattern: 'number'
			}
		}
	});

	return MenuItem;
});
