$(".city").on("mouseenter", (e) => $("#" + e.target.id).show());
$("#map").on("mouseenter", (e) => $(".cityInfo").hide());


// Redirect to the city info

$(".city").on("click", (e) => window.location.href = "./cities/" + e.target.id + ".html");


$('html, body').animate({
    scrollTop: $(document).height()}, 500);