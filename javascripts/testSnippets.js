function escapeHTML(string) {
    var pre = document.createElement('pre');
    var text = document.createTextNode(string);
    pre.appendChild(text);
    return pre.innerHTML;
}


$("pre.htmlCode").each(function () {
    var code = $(this).find("code").html();
    var $code = $(this).find("code");
    var escaped = escapeHTML(code);

    //alert(escaped);

    $code.html(escaped);
    $(this).snippet("html", {style: "zellner"});
    $(this).find("li").each(function () {
        if ($(this).find("code").html() == "" || $(this).find("code").text() == "")
            $(this).remove();
    });

    $(this).parents(".cssPlusSnippet").append("<div class='example_constrictor big'><div class='monitor-led'></div><div class='handler ui-resizable-handle ui-resizable-se'></div>" + code + "</div>");
});


var timeout;
var current_size_timeout
$('.example_constrictor').resizable({
    handles: {
        'se': '.handler'
    },
    minHeight: 180,
    minWidth: 270,
    start: function (event,ui) {
        clearTimeout(timeout);


        current_size_timeout = setInterval(function () {
            sizeChanged(ui);

        }, 100);

    },
    stop: function (event, ui) {
        clearInterval(current_size_timeout);
        $('.example_constrictor').removeClass("mobile");
        timeout = setTimeout(function () {
            $('.example_constrictor').animate({
                "width": "820px",
                "height": "520px"
            }, {duration: 1500, easing: 'easeOutBounce'})
        }, 1);
    }
});



function sizeChanged(ui){
    var w = ui.size.width;

    if(w < 640){
        $('.example_constrictor').addClass("mobile");
    }
    else{
        $('.example_constrictor').removeClass("mobile");
    }
}