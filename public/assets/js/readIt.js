
// this was pulled from one of our projects if we can use any of it lets if not dont worry about deleting it.


// When the page loads, grab and display all of our posts
$.get("/api/all", function(data) {

    if (data.length !== 0) {
  
      for (var i = 0; i < 10; i++) {
  
        var row = $("<div>");
        row.addClass("post");
  
        row.append("<p>" + data[i].user + " posted.. </p>");
        row.append("<p>" + data[i].body + "</p>");
        row.append("<p>On " + new Date(data[i].created_at).toLocaleDateString() + "</p>");
  
        $("#post-area").prepend(row);
  
      }
    }
  });
  
  // When user post (clicks addBtn)
  $("#post-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newpost object
    var newPost = {
      user: $("#author").val().trim(),
      body: $("#post-box").val().trim(),
      created_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
    };
  
    console.log(newPost);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newPost)
      // On success, run the following code
      .then(function() {
  
        var row = $("<div>");
        row.addClass("Post");
  
        row.append("<p>" + newPost.user + " posted: </p>");
        row.append("<p>" + newPost.body + "</p>");
        row.append("<p>On " + new Date(newPost.created_at).toLocaleDateString() + "</p>");
  
        $("#post-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#author").val("");
    $("#post-box").val("");
  });

  $(document).ready(function (){
    setTimeout(function() {
      $("#myThreadModal").modal('show');
    }, 2000);
  })