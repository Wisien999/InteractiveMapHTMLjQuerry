$(".city").on("mouseenter", (e) => $("#" + e.target.id).show());
$("#map").on("mouseenter", (e) => $(".cityInfo").hide());


// Redirect to the city info

$(".city").on("click", (e) => window.location.href = "./cities/" + e.target.id + ".html");

// $(".image").each(function(){
//  var elem = $(this);
//  var id = elem.attr('id');
//  elem.css("background-image", "url('../img/" + id + ".jpg')");
// });

//img.css("background-image", "url('../img/" + img.attr("id") + ".jpg');");

