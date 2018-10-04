function setArticleHeight() {
    $(".side").each(function (index, el) {
        let it = $(this);
        let h = it.height() + 20;
        it.closest(".article").css("min-height", h);
    });

}