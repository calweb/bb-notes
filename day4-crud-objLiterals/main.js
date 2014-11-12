$(function () {
  myBlog.init();
});

var myBlog = {
  init: function () {
    this.initStyling();
    this.initEvents();
  },
  initStyling: function () {
    console.log("initStyling");
    this.getPosts();

  },
  initEvents: function () {
    console.log("initEvents");

    $("form").on('submit', function (e) {
      e.preventDefault();
      var newPost = {
        title: $('.newPostTitle').val(),
        content: $('.newPostContent').val()
      };
      myBlog.createPost(newPost);
      $("#myModal").modal("hide");
    });

  },
  url: "http://tiy-fee-rest.herokuapp.com/collections/bfDemo",
  render: function ($target, template, data) {
    var tmpl = _.template(template, data);
    $target.html(tmpl);
  },
  renderPosts: function () {
    
  },
  getPosts: function () {
    $.ajax({
      url: myBlog.url,
      type: 'GET',
      error: function (err) {
        console.log(err);
      },
      success: function (data) {
        console.log(data);
          var posts = window.posts = data;
          myBlog.render($("#posts"),$("#postsTmpl").html(), posts );
      }
    });
  },
  createPost: function (newPost) {
    $.ajax({
      url: myBlog.url,
      type: 'POST',
      data: newPost,
      error: function (err) {
        console.log(err);
      },
      success: function (res) {
        console.log(res);
        myBlog.getPosts();
      }
    });
  }
};
