
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

// var center = $(window).scrollTop() + $(window).height() / 2;
var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
var top = (height / 2);

var demo = $("video");
$("#spaetifinder").on("click", () => {
  console.log("scrollTop:",$(window).scrollTop());
  console.log("height", $(window).height());
  console.log($(window).innerHeight);
  console.log("offset TOP",$("#spaetifinder").offset().top);

  console.log("In iframe showing function");
    $(".video").css({display: "flex", top: $(window).height()/2 - $(this).height()/2});
    $("video").attr("src", "./demos/spaetifinder_demo.mp4")
    // demo.get().play();

})

$("#petition").on("click", () => {
  console.log("In iframe showing function");
  console.log("scrollTop:",$(window).scrollTop());
  console.log("height", $(window).height());
  console.log("offset TOP", $("#petition").offset().top);
  $(".video").css({display: "flex", top: $(window).height() - $(this).height()/2});
      $("video").attr("src", "./demos/petition_demo.mp4")
    // demo.get().play();

})

$(".video").on("click", () => {
console.log("closing modal");
      $(".video").css({display: "none"});
      // demo.get().pause();
})
