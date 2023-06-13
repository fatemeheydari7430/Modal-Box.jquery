
$(document).ready(function(){
  $(".modal-link").click(function(e){
   e.preventDefault();
      $(".bg-modal").fadeIn();
      $(".modal").fadeIn();
  });
});


$(document).ready(function(){
  $(".close,.bg-modal").click(function(e){
   e.preventDefault();
     $(".bg-modal").fadeOut();
     $(".modal").fadeOut();
  });
});







$(document).ready(function(){
   $("#add").click(function(e){
    e.preventDefault();
      $("#add").before("<div class='input-group'><label for='input'>سابقه</label><input type='text' id='input' placeholder='سابقه خود را وارد نمایید'></div>");
   });
});
