// $.getJSON("https://api.github.com/users/nbucciarelli").then(function(data){
//   console.log(data);
// });
// console.log("hi");

// function get(url){
//   var req = new XMLHttpRequest();
//   var p = new Promise(req);
//   // method, url, async
//   req.open("get", url, true);
//   req.send();
//   return p;
// }

// function Promise(req) {
//   this.request = req;
// }

// Promise.prototype.then = function(callback) {
//   var self = this;
//   var dataForCallback = function() {
//     var json = JSON.parse(self.request.responseText);
//     callback(json);
//   };

//   if(this.request.readyState === 4){
//     dataForCallback();
//   } else { 
//     this.request.onload = dataForCallback;
//   }
// }

// get("https://api.github.com/users/nbucciarelli").then(function(data) {
//   console.log(data);
// })

var Github = function(username) {
  this.data = {};
  this.username = username;
};

Github.prototype.getData = function(deferred) {
  var context = this;
  $.getJSON("https://api.github.com/users/" + this.username).success( function(data){
    context.data = data;
    if(deferred){
      deferred.resolve(context);
    }
  }).error(function() {
    console.log("Something went wrong");
    if(deferred){
      deferred.reject("Something went wrong");
    }
  });
};

Github.prototype.renderData = function(obj) {
  // console.log(this) - this is the promise object.
  // console.log(obj) - this is the github object
  $(".users").append("<img src='" + obj.data.avatar_url + "'>" );
  console.log(this);
  console.log(obj);
  if(obj){
    // Because this is the promise object, you can NOT resolve it. Wtf.
    obj.resolve(obj);
  }
};

Github.prototype.dudeSup = function(obj){
  console.log("dude sup");
  console.log(obj);
  console.log(this);
  console.log(obj.login);
  if(this){
    this.resolve(obj);
  }
};

var nickDef = new $.Deferred();
var nick = new Github("nbucciarelli");
nickDef.promise().then(nick.renderData).then(nick.dudeSup);
nick.getData(nickDef);

var calvinDef = $.Deferred();
var calvin = new Github("calweb");
calvinDef.promise().then(calvin.renderData).then(calvin.dudeSup);
calvin.getData(calvinDef);
