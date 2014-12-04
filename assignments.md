## Dec 18

Let's create a Movie Database
=============================

Data fields:
- Title
- Release year
- Genre's
- Description
- Image

I want your application to be a split paned view. On the left will be a list of movies. When you click a movie from the list, it will show all of the information on the right.

A minimum of 3 pages.

## Day 16 

Tonight's assignment will involve a refactor of previous assignment to include subviews.
Requirements:

Must, at minimum include Header and Footer Subview.

You must create a layout view that handles subviews.

## Day 15 - Assignment

Create a small backbone application that has the following requirements:

- You are free to create any sort of 3 route application, with any type of model data
- The application must contain at least 3 routes, excluding the catch all wildcard.
- At least one of the views must be fetched from the server
- You must use Dustjs templates
- You must use RequireJS to load your application modules


## Day 12 - Assignment

Add Model Validation to your Model, so that you can catch validation errors:

Requirements:

- your MenuItem Model needs to validate at least 2 properties, using: https://github.com/thedersen/backbone.validation
- Only add model to the DOM if the created MenuItem is valid and saved to the server
- Bonus: have the ability to revert the changes (in the UI) of a MenuItem since the last change event;


## Day 11 - Assignment

Convert last week's server crud assignment to utilize RequireJS.

Also, you will need to configure requirejs to use for your dust templates.

Utilizing the Dust library will require the use of a shim and an exports.

Please reference: http://requirejs.org/

## Day 9 - Assignment

Convert your Crud menu assignment from previous night to use the provided server

An open CORS enabled server to store your remote data - you can post,put,delete,get from any domain so be gentle :)
http://tiy-fee-rest.herokuapp.com/collections/<collectionName>

```js
// GET
/collections/<collectionName>

// POST
/collections/<collectionName>

// GET
/collections/<collectionName>/:id

// PUT
/collections/<collectionName>/:id

// DELETE
/collections/<collectionName>/:id
```

## Day 8 - Assignment

Add all events for CRUD to your Previously assigned dinner menu.

Requirements:

- Editing a Model is not present in this demo, you will need to use .set() to edit an existing model.
- You must use the events property in your view constructors for binding your events.

## Day 7 - Assignment

Create a Dinner Menu for this evening with some basic styling.

Requirements:

- You must utilize a collection view and a model view
- the Menu page must at least have SOME styles (padding, contrast), and not data inserted into page.
- Your menu item model can have as many properties as you want, but at least - item name, description, price
- use dust template, instead of underscore

## Day 6 - Assignment - Intro to Backbonejs

Using the demo we went over today, create a Backbone Model and collection for a shopping list.

In a separate file, create three shopping list items and add them to the shopping list collection.

Log out the items in the console.


## Day 4 - Assignment

Create a simple CRUD application using the object literal pattern demonstrated in the demo today. Please use whatever libraries you want (eg. underscore, jquery, dust).

Also, an open CORS enabled server to store your remote data - you can post,put,delete,get from any domain so be gentle :)
http://tiy-fee-rest.herokuapp.com/collections/<collectionName>

```js
// GET
/collections/<collectionName>

// POST
/collections/<collectionName>

// GET
/collections/<collectionName>/:id

// PUT
/collections/<collectionName>/:id

// DELETE
/collections/<collectionName>/:id
```

## Day 3 - Underscore homework

Using the data from subreddit itookapicture
http://www.reddit.com/r/itookapicture.json

Use at least 5 underscore methods (eg. _.pluck, _.each, _.template) to extract data onto a single page.

requirements:

1. The page must contain pictures (thumbnail) of at least the top 15 most upvoted pictures, with linkage to the source, title, and a link to the comments.
2. The page must also include an aggregate of upvotes, and an average of upvotes per link
