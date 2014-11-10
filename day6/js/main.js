
var item = new TodoModel({title: "item 1 title", author: "Nick"});

item.set({isComplete: true});
// console.log(item.get("title"));

var item2 = new TodoModel();
item2.set({author: "Calvin"});



var todoList = new TodoCollection();

todoList.add(item2);
todoList.add(item);


item.set({likesKittens: true});


console.log(todoList.models);


### Assignment - Intro to Backbonejs

Using the demo we went over today, create a Backbone Model and collection for a shopping list.

In a separate file, create three shopping list items and add them to the shopping list collection.

Log out the items in the console.
