define(['backbone', 'jquery', 'utils', 'MenuItemView', 'MenuItemCollection', 'ItemFormView', 'MenuItem', 'templates'], function (Backbone, $, utils, MenuItemView, MenuItemCollection, ItemFormView, MenuItem) {
	var AppView = Backbone.View.extend({
		
		$formModal: $("#formModal"),

		events: {
			'click [data-action="addNew"]': 'createItem'
		},

		initialize: function () {
			var self = this;
			if (!this.collection) {
				this.collection = new MenuItemCollection();
			}

			this.collection.fetch().then(function () {
				self.render()
			});
		},

		createItem: function () {
			var newItem = new MenuItem();
			this.openForm(newItem);
		},

		openForm: function (item) {
			var self = this;
			this.formView = new ItemFormView();
			this.listenTo(this.formView, "formSave", this.saveForm);
			this.listenTo(this.formView, "formCancel", this.closeForm);

			self.formView.model = item;

			self.formView.render().then(function (html) {
				self.$formModal.find(".modal-dialog").html(html);
				self.$formModal.modal('show');
			});
		},

		saveForm: function (item) {
			if (item.isNew()) {
				this.addMenuItem(item);
			}
			item.save();
			this.closeForm();
		},

		closeForm: function () {
			this.$formModal.modal('hide');
			this.formView.remove();
		},

		addMenuItem: function (item) {
			this.collection.push(item);
			this.render();
		},

		render: function () {
			var dfd = $.Deferred();
			this.addAll();
			dfd.resolve(this.el);
			console.log('this el',this.el);
			return dfd.promise();

		},
		addAll: function () {
			_.each(this.collection.models, this.addOne, this );
		},
		addOne: function (item) {
			var self = this;

			var itemView = new MenuItemView ({model: item});

			itemView.render().then(function (html) {

				self.$el.append(html);
			});
		}

	});

	return AppView;
});
