define(['backbone', 'jquery', 'utils', 'MenuItem', 'templates'], function (Backbone, $, utils, MenuItem) {
	var MenuItemView = Backbone.View.extend({
		tagName: "article",
		className: "row",
		template: "menu-item",

		events: {
			'click [data-action="edit"]': 'editItem',
			'click [data-action="revert"]': 'revertItem',
			'click [data-action="delete"]': 'deleteItem'
		},

		initialize: function () {
			if (!this.model) {
				this.model = new MenuItem();
			}

			this.render();
			this.listenTo(this.model, "change", this.render);
		},

		render: function () {
			var self = this;
			var dfd = $.Deferred();

			utils.dustRender(this.template, this.model.toJSON()).then(function (html) {
				self.$el.html(html);
				dfd.resolve(self.el);
			});

			return dfd.promise();
		},

		editItem: function () {
			this.trigger("itemEdit", this.model);
		},

		deleteItem: function () {
			this.$el.remove();
			this.model.destroy();
		},

		revertItem: function () {
			if (this.model.hasChanged()) {
				this.model.set(this.model.previousAttributes());
				this.model.save();
				return;
			}
		}
	});

	return MenuItemView;
});
