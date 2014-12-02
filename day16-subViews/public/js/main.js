require.config({
	baseUrl: '/public/js/',
	paths: {
		'jquery': 'vendor/jquery/dist/jquery',
		'backbone': 'vendor/backbone/backbone',
		'backbone-validation': 'vendor/backbone-validation/dist/backbone-validation-amd',
		'underscore': 'vendor/underscore/underscore',
		'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
		'dustjs-linkedin': 'vendor/dustjs-linkedin/dist/dust-full',
		'templates': 'lib/compiled-amd'
	},
	shim: {
		'bootstrap' : { 'deps': ['jquery'] },
		'dustjs-linkedin': { 'exports': 'dust'},
		'backbone-validation': { 'deps': ['backbone'], 'exports': 'Backbone' }
	}
});

require(['jquery', 'backbone', 'MenuItemCollection', 'LayoutView', 'routes', 'bootstrap'], function ($, Backbone, MenuItemCollection, LayoutView, Router) {
	window.App = {};
	$(function() {
		var layout = new LayoutView().render();
		App.router = new Router({layout: layout, foo: 'foo'});
		Backbone.history.start();

	});
});
