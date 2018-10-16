//$(".city").on("mouseout", (e) => $(".cityInfo").hide(500));

let animationDuration = 500;

let lock = false;
let lastID;

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
    
    lastID = e.target.id;
    switch (e.target.id) {
        case "bronina":
        cityName = "Bronina";
        sDes = `W 1827 r. wieś liczyła 25 domów, a obecnie 122 domy.<br />
        Bitwa pod Broniną z 9 września 1939 r.<br />
        Krasowa jaskinia Sawickiego`;
        break;
        case "stopnica":
        cityName = "Stopnica";
        sDes = `"Stopnica" czy "Stobnica"?<br />
        Bogata historia<br />
        Obiekty`;
        break;
        case "kozubow":
        cityName = "Kozubów";
        sDes = `Kozubowski park krajobrazowy<br />
	2 bitwy<br />
	Piękne widoki z Góry Byczowskiej`;
        break;
        case "olganow":
        cityName = "Olganów";
        sDes = `W 1827 roku liczyła 128 mieszkańców i 18 domów. Obecnie jest to ok. 90 domów, zamieszkałych przez ok. 312 osób.`;
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
    info.on("click", e => window.location.href = "./cities/" + lastID + ".html");

    info.css("top", it.position().top + 10);
    info.css("left", it.position().left + 20);

    info.show(animationDuration);
    //$("#" + e.target.id).show();
});


// Redirect to the city info

$(".city").on("click", (e) => window.location.href = "./cities/" + e.target.id + ".html");


$('html, body').animate({
    scrollTop: $(document).height()
}, 500);