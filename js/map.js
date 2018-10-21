let animationDuration = 500;

let lock = false;
let lastID;
let i = 0;

let objects = {};

$(".city").on("mouseenter", function (e) {
    let it = $(this);

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
            <div class="cityInfo" id="${lastID}Info">
                <h3>${cityName}</h3>
                <div class="info">
                    ${sDes}
                </div>
            </div>
        `);

    objects[lastID] = {
        HTMLobj: $(`.cityInfo#${lastID}Info`),
        parentHTMLobj: $("#" + lastID),
        lock: false
    };

    objects[lastID].parentHTMLobj.on("mouseleave", e => { // Remove pop-up - first case
        if (e.relatedTarget.id != e.target.id + "Info") {
            objects[lastID].HTMLobj.hide(animationDuration);
            setTimeout(function () { objects[lastID].HTMLobj.remove() }, animationDuration * 2);
            objects[lastID].lock = false;
        }
    });
    objects[lastID].HTMLobj.on("mouseleave", e => { // Remove pop-up - second case
        const tarID = e.target.id;
        if (e.relatedTarget.id != tarID.substring(0, tarID.length - 4)) {
            const obj = $(e.target);
            obj.hide(animationDuration);
            setTimeout(function () { obj.remove() }, animationDuration * 2);
            objects[lastID].lock = false;
        }
    });

    objects[lastID].HTMLobj.on("click", e => window.location.href = "./cities/" + lastID + ".html");

    objects[lastID].HTMLobj.css("top", it.position().top + 10);
    objects[lastID].HTMLobj.css("left", it.position().left + 20);

    if (!objects[lastID].lock){
        objects[lastID].HTMLobj.show(animationDuration);
    }

    objects[lastID].lock = true;
});

// Redirect to the city info

$(".city").on("click", (e) => window.location.href = "./cities/" + e.target.id + ".html");

// Scroll down on start

$('html, body').animate({
    scrollTop: $(document).height()
}, 500);