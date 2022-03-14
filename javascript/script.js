$(document).ready(function() {
  $(".whatWeDo").click(function(){
    $(span).toggle();
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
