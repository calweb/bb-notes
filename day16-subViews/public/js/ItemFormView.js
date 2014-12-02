define(['backbone', 'jquery', 'utils', 'MenuItem', 'templates', 'backbone-validation'], function (Backbone, $, utils, MenuItem) {
	var ItemFormView = Backbone.View.extend({
		className: "modal-content",
		template: "add-menu-item",
		events: {
			'click [data-action="save"]': 'handleFormSave',
			'click [data-action="cancel"]': 'handleFormCancel'
		},

		initialize: function () {
			if (!this.model) {
				this.model = new MenuItem();
			}

			this.render();
		},

		render: function () {
			var self = this;
			var dfd = $.Deferred();

			utils.dustRender(this.template, this.model.toJSON()).then(function (html) {
				self.$el.html(html);

				Backbone.Validation.bind(self, {
					valid: self.respondToValidModel,
					invalid: self.respondToInvalidModel
				});

				dfd.resolve(self.el);
			});

			return dfd.promise();
		},

		respondToValidModel: function (view, attr, selector) {
			var $el = view.$('[name=' + attr + ']');
			var $group = $el.closest('.form-group');

			$group.removeClass('has-error');
			$group.find('.help-block').html('').addClass('hidden');
		},

		respondToInvalidModel: function (view, attr, error, selector) {
			var $el = view.$('[name=' + attr + ']');
			var $group = $el.closest('.form-group');

			$group.addClass('has-error');
			$group.find('.help-block').html(error).removeClass('hidden');
		},

		updateModel: function () {
			this.model.set({
				name: this.$el.find("#itemName").val(),
				description: this.$el.find("#itemDescription").val(),
				price: this.$el.find("#itemPrice").val()
			});
		},

		clearForm: function () {
			this.$el.find("input").val("");
		},

		handleFormSave: function (e) {
			this.updateModel();

			if (this.model.isValid(true)) {
				this.clearForm();
				this.model.save();
				App.router.navigate('/', {trigger: true});
			}
			return false;
		},

		handleFormCancel: function (e) {
			this.clearForm();
			this.trigger("formCancel");
			return false;
		}
	});

	return ItemFormView;
});
