console.log("hello world")

function scrollToAnchor(aid) {
    var aTag = $("a[name='" + aid + "']")
    $('html, body').animate({
        scrollTop: aTag.offset().top
    }, "slow")
}


$('#link').click(function () {
    console.log("HEllo");
    scrollToAnchor('super');
})