var offsets = [];

$(".paragraph-title").each(function () {
    offsets.push($(this).offset().top);
});


$(".scrollMenu-menu").find(".CELL").click(function (e) {
    var href = $(this).attr("data-href");

    $(".scrollMenu-scrollable").scrollTo(href, {duration: 'slow', offsetTop: '50'});
    e.preventDefault();
});


$(".scrollMenu-scrollable").scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + 220;

    for (var i = 0; i < offsets.length; i++) {
        if (fromTop < offsets[0])
            activeMenu(0);
        else {
            if (fromTop > offsets[offsets.length - 1])
                activeMenu(offsets.length - 1);
            else {
                if (fromTop >= offsets[i] && fromTop < offsets[i + 1])
                    activeMenu(i)
            }
        }
    }

    function activeMenu(i) {
        $(".scrollMenu-menu .CELL").removeClass("active");
        $(".scrollMenu-menu .CELL").eq(i).addClass("active");
    }

});