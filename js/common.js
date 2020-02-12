$(function () {
    //自定义select
    var selectLi = $(".zdySelect").next().find("li");
    $(".zdySelect").click(function () {
        $(this).next().toggle();
    });
    selectLi.click(function () {
        $(this).parents("ul").toggle();
        $(this).parents("ul").prev().find("p").text($(this).text());
    });

    $(".zcy_autoLogin>span").click(function () {
        $(this).toggleClass("cancel");
    });

    $(".zcy_floatRbtn a").mouseenter(function () { $(this).find("div").stop().animate({ opacity: "1", left: "-90px" }, 300); });
    $(".zcy_floatRbtn a").mouseleave(function () { $(this).find("div").stop().animate({ opacity: "0", left: "-40px" }, 300); });

    $(".zcy_menu a").mouseenter(function () {
        $(this).hasClass("navTag") ? $(".zcy_InMeunSon").hide().eq($(".navTag").index($(this))).slideDown() : $(".zcy_InMeunSon").slideUp('fast');
    });

    $(".zcy_INnavBox").mouseleave(function () {
        $(".zcy_InMeunSon").slideUp('fast');
    });

    $(".zcy_Tab a").click(function () {
        $(".zcy_Tab a").removeClass("act");
        $(this).addClass("act");
        $(".zcy_Content").hide().eq($(this).index()).show();
    });

    $(".ltable tr:nth-child(odd)").addClass("odd_bg");

    $(window).scroll(function (e) {
        if ($(window).scrollTop() > 50) {
            $(".zcy_INnavBox").addClass("float");
        }
        if ($(window).scrollTop() <= 50) {
            $(".zcy_INnavBox").removeClass("float");
        }
    });
});

function showEle(obj)
{
    if(obj && obj.length > 0)
    {
        for (var i = 0; i < obj.length; i++)
        {
            $("#" + obj[i]).length > 0 ? $("#" + obj[i]).removeClass("none") : $("." + obj[i]).removeClass("none");
        }
    }
}

function hideEle(obj) {
    if (obj && obj.length > 0) {
        for (var i = 0; i < obj.length; i++) {
            $("#" + obj[i]).length > 0 ? $("#" + obj[i]).addClass("none") : $("." + obj[i]).addClass("none");
        }
    }
}