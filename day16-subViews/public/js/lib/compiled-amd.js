define(["dustjs-linkedin"], function(dust) {
  // ./templates/add-menu-item.dust
  (function() {
    dust.register("add-menu-item", body_0);

    function body_0(chk, ctx) {
      return chk.write("<div class=\"modal-body\"><form><div class=\"form-group\"><label for=\"itemName\">Name:</label><input type=\"text\" class=\"form-control\" id=\"itemName\" name=\"name\" value=\"").reference(ctx._get(false, ["name"]), ctx, "h").write("\"><span class=\"help-block hidden\"></span></div><div class=\"form-group\"><label for=\"itemDescription\">Description:</label><input type=\"text\" class=\"form-control\" id=\"itemDescription\" name=\"description\" value=\"").reference(ctx._get(false, ["description"]), ctx, "h").write("\"><span class=\"help-block hidden\"></span></div><div class=\"form-group\"><label for=\"itemPrice\">Price:</label><input type=\"text\" class=\"form-control\" id=\"itemPrice\" name=\"price\" value=\"").reference(ctx._get(false, ["price"]), ctx, "h").write("\"><span class=\"help-block hidden\"></span></div></form></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" data-action=\"save\">Save</button><button class=\"btn btn-default\" data-action=\"cancel\">Cancel</button></div>");
    }
    return body_0;
  })();
  // ./templates/footer.dust
  (function() {
    dust.register("footer", body_0);

    function body_0(chk, ctx) {
      return chk.write("<footer>this is the footer.</footer>");
    }
    return body_0;
  })();
  // ./templates/header.dust
  (function() {
    dust.register("header", body_0);

    function body_0(chk, ctx) {
      return chk.write("<nav class=\"navbar navbar-default\" role=\"navigation\"><div class=\"container-fluid\"><!-- Brand and toggle get grouped for better mobile display --><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a class=\"navbar-brand\" href=\"#\">Brand</a></div><!-- Collect the nav links, forms, and other content for toggling --><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li class=\"active\"><a href=\"#\">Link <span class=\"sr-only\">(current)</span></a></li><li><a href=\"#\">Link</a></li><li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a><ul class=\"dropdown-menu\" role=\"menu\"><li><a href=\"#\">Action</a></li><li><a href=\"#\">Another action</a></li><li><a href=\"#\">Something else here</a></li><li class=\"divider\"></li><li><a href=\"#\">Separated link</a></li><li class=\"divider\"></li><li><a href=\"#\">One more separated link</a></li></ul></li></ul><form class=\"navbar-form navbar-left\" role=\"search\"><div class=\"form-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Search\"></div><button type=\"submit\" class=\"btn btn-default\">Submit</button></form><ul class=\"nav navbar-nav navbar-right\"><li><a href=\"#\">Link</a></li><li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a><ul class=\"dropdown-menu\" role=\"menu\"><li><a href=\"#\">Action</a></li><li><a href=\"#\">Another action</a></li><li><a href=\"#\">Something else here</a></li><li class=\"divider\"></li><li><a href=\"#\">Separated link</a></li></ul></li></ul></div><!-- /.navbar-collapse --></div><!-- /.container-fluid --></nav><h1>Welcome to Bluth's Frozen Bananas!</h1>");
    }
    return body_0;
  })();
  // ./templates/menu-item.dust
  (function() {
    dust.register("menu-item", body_0);

    function body_0(chk, ctx) {
      return chk.write("<div class=\"col-md-2\">Name: ").reference(ctx._get(false, ["name"]), ctx, "h").write("</div><div class=\"col-md-5\">Description: ").reference(ctx._get(false, ["description"]), ctx, "h").write("</div><div class=\"col-md-2\">Price: ").reference(ctx._get(false, ["price"]), ctx, "h").write("</div><div class=\"col-md-3\"><button class=\"btn btn-default\" data-action=\"edit\">Edit</button><button class=\"btn btn-default\" data-action=\"revert\">Revert</button><button class=\"btn btn-danger\" data-action=\"delete\">Delete</button></div>");
    }
    return body_0;
  })();
  define("add-menu-item", function() {
    return function(locals, callback) {
      var rendered;

      dust.render("add-menu-item", locals, function(err, result) {
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
  define("footer", function() {
    return function(locals, callback) {
      var rendered;

      dust.render("footer", locals, function(err, result) {
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
  define("header", function() {
    return function(locals, callback) {
      var rendered;

      dust.render("header", locals, function(err, result) {
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
  define("menu-item", function() {
    return function(locals, callback) {
      var rendered;

      dust.render("menu-item", locals, function(err, result) {
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
  return ["add-menu-item", "footer", "header", "menu-item"];
});