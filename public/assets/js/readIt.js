

$(function() {

// create a new thread
$("#threadCreate").on("click", function(event) {

    event.preventDefault();

    var newThread = {
      thread_name: $("#threadName").val().trim(),
      body: $("#threadContent").val().trim(),
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



$('#tags li').on("click", function(event){

  let category = $(this).attr('id')
  let categoryString = "/category/" + category;
    
  $.get("/api/threads" + categoryString, function(data) {
    threads = data;}.then(function(){

 
    }
    ));
});


 
// function to change dropdown menu button to what ever is selected
$(function(){
  
  $(".dropdown-menu li a").click(function(){
    
    $(".dropdown-toggle:first-child").text($(this).text());
     $(".dropdown-toggle:first-child").val($(this).text());
  });

});


})

