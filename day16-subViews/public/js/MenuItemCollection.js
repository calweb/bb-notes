define(['backbone', 'MenuItem', 'underscore'], function (Backbone, MenuItem, _) {
	var MenuItemCollection = Backbone.Collection.extend({
		model: MenuItem,
		url: "http://tiy-fee-rest.herokuapp.com/collections/kgoggin",
		toJSON: function () {
			var arr = [];
			_.each(this.models, function (model) {
				arr.push(model.toJSON());
			});

			return arr;
		}
	});

	return MenuItemCollection;
});
