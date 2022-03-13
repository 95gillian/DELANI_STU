$(document).ready(function() {

  $("#design").click(function(){
    $("#show").toggle();
    $(".hide").toggle();
  })

  $("#dev").click(function(){
    $("#show").toggle();
    $(".hide").toggle();
  })

  $("#prod").click(function(){
    $("#show").toggle();
    $(".hide").toggle();
  })

  //Insert white box upo hover
  $(".Hover").hover(function(){
    $(this).animate({opacity:'1'});
  },
  function(){
    $(this).animate({opacity:'0'});
  })
$('.submit').click(function () {
        var Name = $("#FNAME name").val();
        var Email = $("#EMAIL").val();
        var Message = $("#MESSAGE");
        var key ="c8fbd9a0cf3958e02be2822e55cfbfc5-us4";
        if (Name == '' || Email == '' || Message == '') {
            alert("Please make sure you have filled in the form correctly!");
        } else {
            alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
        }
  });
});
