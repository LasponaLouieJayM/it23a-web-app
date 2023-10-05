$(document).ready(function(){
    to_nav();
});

  function to_nav()  {
$.post("navigation/nav.php", {}, function (data) {
      $("#contents").html(data);  
    });
}
