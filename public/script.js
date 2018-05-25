
function scrollToAnchor(aid) {
    var aTag = $("a[name='" + aid + "']")
    $('html, body').animate({
        scrollTop: aTag.offset().top
    }, "slow")
}


$('#resume').click(function () {
    scrollToAnchor('resume');
})

$('#projects').click(function () {
    scrollToAnchor('projects');
})

$('#contact').click(function () {
    scrollToAnchor('contact');
})

$('#skills').click(function () {
    scrollToAnchor('skills');
})



var menu = $(".myDIV");
var menuItems = $(".menuItem");

  menuItems.on("click", function() {
    for (var i = 0; i < menuItems.length; i++) {
    var currentItem = $(".active");
    currentItem.removeClass('active');
    $(this).addClass('active');

  }
});
