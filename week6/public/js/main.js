require.config({
	baseUrl: '/public/js/',
	paths: {
		'jquery': 'vendor/jquery/dist/jquery',
		'backbone': 'vendor/backbone/backbone',
		'marionette': 'vendor/backbone.marionette/lib/backbone.marionette',
		'dustjs-linkedin': 'vendor/dustjs-linkedin/dist/dust-full',
		'marionette-dust': 'vendor/marionette-dust/src/amd/backbone.marionette.dust',
		'backbone-validation': 'vendor/backbone-validation/dist/backbone-validation-amd',
		'underscore': 'vendor/underscore/underscore',
		'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
		'templates': 'lib/compiled-amd'
	},
	shim: {
		'marionette': { 'deps': ['backbone'], 'exports': 'Marionette'},
		'bootstrap' : { 'deps': ['jquery'] },
		'dustjs-linkedin': { 'exports': 'dust'},
		'backbone-validation': { 'deps': ['backbone'], 'exports': 'Backbone' }
	},
	map: {
		'*': {
			'dust': 'dustjs-linkedin'
		}
	}
});

require(['jquery', 'backbone', 'marionette', 'app', 'books', 'views'], function ($, Backbone, Marionette, BooksApp, Books, Views) {

	$(function() {
		BooksApp.addInitializer(function () {
			var routes = {
				'click button': 'someMethod'
			};
			var controller = {
				someMethod: function () {
					// do something here
				}
			}
			var router = Marionette.AppRouter({
				appRoutes: routes,
				controller: controller
			})
			var appRouter = new router();
		})
	BooksApp.start();
	Backbone.history.start({pushState: true});
	});
});
