define(["dustjs-linkedin"], function(dust) {
  // ./views/about-view.html
  (function() {
    dust.register("about-view", body_0);

    function body_0(chk, ctx) {
      return chk.write("<h1>About Page</h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    }
    return body_0;
  })();
  // ./views/book-view.html
  (function() {
    dust.register("book-view", body_0);

    function body_0(chk, ctx) {
      return chk.write("<article class=\"row\"><div class=\"col-md-3\"><img src=\"").reference(ctx._get(false, ["photo"]), ctx, "h").write("\" alt=\"").reference(ctx._get(false, ["title"]), ctx, "h").write("\" style=\"width: 150px\"/></div><div class=\"col-md-9\"><h2>").reference(ctx._get(false, ["title"]), ctx, "h").write("</h2><p>").reference(ctx._get(false, ["content"]), ctx, "h").write("</p><p>Author: ").reference(ctx._get(false, ["author"]), ctx, "h").write("</p><p>Publication Date: ").reference(ctx._get(false, ["pubDate"]), ctx, "h").write("</p><button>Delete</button></div><hr /></article>");
    }
    return body_0;
  })();
  // ./views/content-view.html
  (function() {
    dust.register("content-view", body_0);

    function body_0(chk, ctx) {
      return chk.write("  <header></header><div class=\"container\"><div class=\"row\"><div id=\"content\" class=\"col-md-8\"></div><div id=\"sidebar\" class=\"col-md-4\"></div></div></div><footer></footer>");
    }
    return body_0;
  })();
  // ./views/footer-view.html
  (function() {
    dust.register("footer-view", body_0);

    function body_0(chk, ctx) {
      return chk.write("<h2>Footer Area</h2>");
    }
    return body_0;
  })();
  // ./views/form-view.html
  (function() {
    dust.register("form-view", body_0);

    function body_0(chk, ctx) {
      return chk.write("<h2><input type=\"text\" placeholder=\"Book Title\" id=\"title\"></h2><p><textarea type=\"text\" placeholder=\"Book Content\" id=\"content\"></textarea></p><p><input type=\"text\" placeholder=\"Book Author\" id=\"author\"></p><p><input type=\"text\" placeholder=\"Book Cover Photo\" id=\"photo\"></p><p><input type=\"text\" placeholder=\"Book Publish Date (Year)\" id=\"pubDate\"></p><button>Create Post</button>");
    }
    return body_0;
  })();
  // ./views/header-view.html
  (function() {
    dust.register("header-view", body_0);

    function body_0(chk, ctx) {
      return chk.write("  <h2>Header Area</h2><p><a href=\"home\">Home</a> | <a href=\"addBook\">about</a> <a href=\"about\">About Us</a></p>");
    }
    return body_0;
  })();
  // ./views/help-view.html
  (function() {
    dust.register("help-view", body_0);

    function body_0(chk, ctx) {
      return chk.write("<ul><li>Add title</li><li>Add Author</li><li>Add Url to Book Cover</li><li>Add publication Date</li></ul>");
    }
    return body_0;
  })();
  // ./views/no-books.html
  (function() {
    dust.register("no-books", body_0);

    function body_0(chk, ctx) {
      return chk.write("<h1>There are no books currently.</h1><p> Please use the form provided to add new books. </p>");
    }
    return body_0;
  })();
  // ./views/test.html
  (function() {
    dust.register("test", body_0);

    function body_0(chk, ctx) {
      return chk.write("<h1>hello world</h1>");
    }
    return body_0;
  })();
  define("about-view", function() {
    return function(locals, callback) {
      var rendered;

      dust.render("about-view", locals, function(err, result) {
        if (typeof callback === "function") {
          try {
            callback(err, result);
          } catch (e) {}
        }

        if (err) {
          throw err
        } else {
          rendered = result;
        }
      });

      return rendered;
    }
  });
  define("book-view", function() {
    return function(locals, callback) {
      var rendered;

      dust.render("book-view", locals, function(err, result) {
        if (typeof callback === "function") {
          try {
            callback(err, result);
          } catch (e) {}
        }

        if (err) {
          throw err
        } else {
          rendered = result;
        }
      });

      return rendered;
    }
  });
  define("content-view", function() {
    return function(locals, callback) {
      var rendered;

      dust.render("content-view", locals, function(err, result) {
        if (typeof callback === "function") {
          try {
            callback(err, result);
          } catch (e) {}
        }

        if (err) {
          throw err
        } else {
          rendered = result;
        }
      });

      return rendered;
    }
  });
  define("footer-view", function() {
    return function(locals, callback) {
      var rendered;

      dust.render("footer-view", locals, function(err, result) {
        if (typeof callback === "function") {
          try {
            callback(err, result);
          } catch (e) {}
        }

        if (err) {
          throw err
        } else {
          rendered = result;
        }
      });

      return rendered;
    }
  });
  define("form-view", function() {
    return function(locals, callback) {
      var rendered;

      dust.render("form-view", locals, function(err, result) {
        if (typeof callback === "function") {
          try {
            callback(err, result);
          } catch (e) {}
        }

        if (err) {
          throw err
        } else {
          rendered = result;
        }
      });

      return rendered;
    }
  });
  define("header-view", function() {
    return function(locals, callback) {
      var rendered;

      dust.render("header-view", locals, function(err, result) {
        if (typeof callback === "function") {
          try {
            callback(err, result);
          } catch (e) {}
        }

        if (err) {
          throw err
        } else {
          rendered = result;
        }
      });

      return rendered;
    }
  });
  define("help-view", function() {
    return function(locals, callback) {
      var rendered;

      dust.render("help-view", locals, function(err, result) {
        if (typeof callback === "function") {
          try {
            callback(err, result);
          } catch (e) {}
        }

        if (err) {
          throw err
        } else {
          rendered = result;
        }
      });

      return rendered;
    }
  });
  define("no-books", function() {
    return function(locals, callback) {
      var rendered;

      dust.render("no-books", locals, function(err, result) {
        if (typeof callback === "function") {
          try {
            callback(err, result);
          } catch (e) {}
        }

        if (err) {
          throw err
        } else {
          rendered = result;
        }
      });

      return rendered;
    }
  });
  define("test", function() {
    return function(locals, callback) {
      var rendered;

      dust.render("test", locals, function(err, result) {
        if (typeof callback === "function") {
          try {
            callback(err, result);
          } catch (e) {}
        }

        if (err) {
          throw err
        } else {
          rendered = result;
        }
      });

      return rendered;
    }
  });
  return ["about-view", "book-view", "content-view", "footer-view", "form-view", "header-view", "help-view", "no-books", "test"];
});