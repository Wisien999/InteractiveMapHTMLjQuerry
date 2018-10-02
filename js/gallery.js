let no;
let maxNo;
let title;
let it;
let picture = $(".gallery img");

picture.click(function(event) {
    const body = $("body");
    it = $(this);

    // Save Pictures amount and actual picture number
    maxNo = it.parents(".gallery").children().length;
    no = getIndex(it, maxNo);
    title = getTitle(it, maxNo);

    // Create Gallery
    body.append(`<div class="background">
    <div class="DisplayGallery">
    <div id="TopBar">
    <h1 id="title">${title}</h1>
    <h4 id="counter">${no}/${maxNo}</h4>
            </div>
            
            <div id="img">
            <div class="arrow arrowLeft"><img src="../img/arrowUp.png" id="left" width="100%"></div>
            <img src="${it.attr("src")}" alt="" width="100%">
                <div class="arrow arrowRight"><img src="../img/arrowUp.png" id="right" width="100%"></div>
                </div>
                </div>
                </div>`);
});

$("body").click(function(event) { 
    console.dir(event.target);
    
    if (event.target.className == "background") { //Close Gallery
        $("div.background").remove();
    }
    else if(event.target.id == "left") {  // Previous picture 
        $("div.background").remove();

        if (it.parent("figure").length) {
            for (let i = 1; i <= no; i++) {
                if (it.parent().is(`:nth-child(${i+1})`)) {
                    it.parents(".gallery").children(`:nth-child(${i})`).children("img").click();
                }
            }
        }
        else {
            for (let i = 1; i <= no; i++) {
                if (it.is(`:nth-child(${i+1})`)) {
                    it.parents(".gallery").children(`:nth-child(${i})`).click();
                }
            }
        }
    }
    else if(event.target.id == "right") {  // Next picture
        $("div.background").remove();

        if (it.parent("figure").length) {
            for (let i = maxNo; i >= 1; i--) {
                if (it.parent().is(`:nth-child(${i-1})`)) {
                    it.parents(".gallery").children(`:nth-child(${i})`).children("img").click();
                }
            }
        }
        else {
            for (let i = maxNo; i >= 1; i--) {
                if (it.is(`:nth-child(${i-1})`)) {
                    it.parents(".gallery").children(`:nth-child(${i})`).click();
                }
            }
        }
    }
});

function getIndex(it, endIndex) {
    if (it.parent("figure").length) {
        for (let i = 1; i <= endIndex; i++) {
            if (it.parent().is(`:nth-child(${i})`)) {
                return i;
            }
        }
    }
    else {
        for (let i = 1; i <= endIndex; i++) {
            if (it.is(`:nth-child(${i})`)) {
                return i;
            }
        }
    }

}

function getTitle(it, endIndex) {
    if (it.parent("figure").length) {
        return it.parent().children("figcaption").text();

    }
    return "";
}