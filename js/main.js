$(".city").on("mouseenter", (e) => $("#" + e.target.id).show());
$("#map").on("mouseenter", (e) => $(".cityInfo").hide());

// Redirect to the city info

$(".city").on("click", (e) => window.location.href = "./cities/" + e.target.id + ".html");

// i = 0;
// function showInfo(e, city) {
//     console.log(i);
//     i++;
//     e.target.id
//     $("#" + city).show();
// }

// console.log(window.location);