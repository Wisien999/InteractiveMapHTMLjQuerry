//$(".city").on("mouseout", (e) => $(".cityInfo").hide(500));

let animationDuration = 500;

let lock = false;
$("#map").on("mouseover", e => {
    if (!lock) {
        let info = $(".cityInfo");
        info.hide(animationDuration);
        //$(".city").hide(animationDuration);
        setTimeout(function () { info.remove() }, animationDuration + 100);
        //info.remove();
    }
});
$(".city").on("mouseover", e => lock = true);
$(".city").on("mouseout", e => lock = false);
$(".city").on("mouseenter", function (e) {
    let it = $(this);
    //console.dir(it.position());

    let cityName;
    let sDes;

    switch (e.target.id) {
        case "bronina":
        cityName = "Bronina";
        sDes = `W 1827 r. wieś liczyła 25 domów, a obecnie 122 domy.<br />
        Bitwa pod Broniną z 9 września 1939 r.<br />
        Krasowa jaskinia Sawickiego`;
        break;
        case "stopnica":
        cityName;
        sDes;
        break;
        case "kozubow":
        cityName;
        sDes;
        break;
        case "olganow":
        cityName;
        sDes;
        break;
    }

        $("#map").append(`
            <div class="cityInfo">
                <h3>${cityName}</h3>
                <div class="info">
                    ${sDes}
                </div>
            </div>
        `);

    let info = $(".cityInfo");
    info.on("mouseout", e => lock = false);
    info.on("mouseover", e => lock = true);

    info.css("top", it.position().top + 10);
    info.css("left", it.position().left + 20);

    $(".cityInfo").show(animationDuration);
    //$("#" + e.target.id).show();
});


// Redirect to the city info

$(".city").on("click", (e) => window.location.href = "./cities/" + e.target.id + ".html");


$('html, body').animate({
    scrollTop: $(document).height()
}, 500);