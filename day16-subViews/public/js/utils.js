define(['jquery', 'dustjs-linkedin', 'templates'], function ($, dust) {
    return {
      dustRender: function (template, context) {
        var dfd = $.Deferred();

        if (!template || !context) {
          dfd.reject("Error: missing template or context");
        }

        else {
          dust.render(template, context, function (err, out) {
            if (err) {
              dfd.reject(err);
            }

            else {
              dfd.resolve(out);
            }
          });
        }

        return dfd.promise();
      }
    }
});
