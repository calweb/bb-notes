console.log(gitHubEvents);

var pushEvents = _.filter(gitHubEvents, function (eventObj) {
  return eventObj.type === "PushEvent";
});

// var commitMsgs = _.pluck(pushEvents, 'message');
var commitsArr = _.map(pushEvents, function (obj) {
                  return obj.payload.commits;
                });
// var flattenedArr =
// console.log(flattenedArr);

var plucked = _.pluck(_.flatten(_.map(_.filter(gitHubEvents, function (eventObj) {
  return eventObj.type === "PushEvent";
}), function (obj) {
                  return obj.payload.commits;
                })), 'message');
console.log(plucked);

var pluckingAwesome = _.chain(gitHubEvents)
                       .filter(function (eventObj) {
                         return eventObj.type === "PushEvent";
                       })
                       .map(function (obj) {
                         return obj.payload.commits;
                       })
                       .flatten()
                       .pluck('message')
                       .value();


// var nastyNotSweetTea = _

// console.log(pluckingAwesome);


var testData = [
  {
    name: "calvin",
    hobby: "surfing"
  },
  {
    name: "nick",
    hobby: "indentation"
  },
  {
    name: "john p",
    hobby: "drums"
  },
  {
    name: "rich",
    hobby: "javascript"
  }
];

var tmpl = [
  "<% _.each(function(element, index, list) { %>",
  "<h2><%= element.name %></h2>",
  "<span><%= element.hobby %></span>",
  "<% }); %>"
].join("");



var template = _.template(_.each(function(element, index, list) {

);
template(testData);










### Underscore homework

Using the data from subreddit itookapicture
http://www.reddit.com/r/itookapicture.json

Use at least 5 underscore methods (eg. _.pluck, _.each, _.template) to extract data onto a single page.

requirements:

1. The page must contain pictures (thumbnail) of at least the top 15 most upvoted pictures, with linkage to the source, title, and a link to the comments.
2. The page must also include an aggregate of upvotes, and an average of upvotes per link
