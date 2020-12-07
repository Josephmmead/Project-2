$(function() {

// create a new thread
$("#threadCreate").on("click", function(event) {

    event.preventDefault();

    var newThread = {
      thread_name: $("#threadName").val().trim(),
      category: $(".dropdown-toggle").val()
    };

    $.ajax("/api/threads", {
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
  $("#postCreate").on("click", function(event) {

    event.preventDefault();

    var newPost = {
      title: $("#postTitle").val().trim(),
      user: $("#postUser").val().trim(),
      body: $("postBody").val().trim(),
      thread_name: $(".dropdown-toggle").val(),
      // figure out how to get this Id from the handlebars 
      threadID: $(".Something or other").val()
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


$(function(){
  
  $(".dropdown-menu li a").click(function(){
    
    $(".dropdown-toggle:first-child").text($(this).text());
     $(".dropdown-toggle:first-child").val($(this).text());
  });

});

});