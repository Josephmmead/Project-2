$(function() {

// create a new thread
$("#threadCreate").on("submit", function(event) {

    event.preventDefault();

    var newThread = {
      thread_name: $("#threadName").val().trim(),
      category: $("#threadCategory").val()
    };

    $.ajax("/api/thread", {
      type: "POST",
      data: newThread
    }).then(
      function() {
        console.log("Created a new thread called:"  + newThread);

        location.reload();
      }
    );
  });

// create a new post 
  $("#postCreate").on("submit", function(event) {

    event.preventDefault();

    var newPost = {
      title: $("#postTitle").val().trim(),
      user: $("#postUser").val().trim,
      body: $("postBody").val.trim
    };

    $.ajax("/api/post", {
      type: "POST",
      data: newPost
    }).then(
      function() {
        console.log("Created a new post: "  + newPost);

        location.reload();
      }
    );
  });

  
})