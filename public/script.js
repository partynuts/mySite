function scrollToAnchor( aid ) {
	var aTag = $( "a[name='" + aid + "']" )
	$( 'html, body' ).animate( {
		scrollTop: aTag.offset().top
	}, "slow" )
}


$( '#resume' ).click( function() {
	scrollToAnchor( 'resume' );
} )

$( '#projects' ).click( function() {
	scrollToAnchor( 'projects' );
} )

$( '#contact' ).click( function() {
	scrollToAnchor( 'contact' );
} )

$( '#skills' ).click( function() {
	scrollToAnchor( 'skills' );
} )



var menu = $( ".myDIV" );
var menuItems = $( ".menuItem" );

menuItems.on( "click", function() {
	for ( var i = 0; i < menuItems.length; i++ ) {
		var currentItem = $( ".active" );
		currentItem.removeClass( 'active' );
		$( this ).addClass( 'active' );

	}
} );

//Demo Videos //

// var center = $(window).scrollTop() + $(window).height() / 2;
var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
var top = ( height / 2 );

// jQuery.fn.center = function() {
// 	console.log( "HÄÄÄÄÄÄÄÄ" );
// 	console.log( "THIS", this );
// 	this.css( "position", "absolute" );
// 	this.css( "top", Math.max( 0, ( ( $( window ).height() - $( this ).outerHeight() ) / 2 ) +
// 		$( window ).scrollTop() ) + "px" );
// 	this.css( "left", Math.max( 0, ( ( $( window ).width() - $( this ).outerWidth() ) / 2 ) +
// 		$( window ).scrollLeft() ) + "px" );
// 	return this;
// }


var demo = $( "video" );
$( "#spaetifinder" ).on( "click", () => {


	$( ".video" ).css( {
		display: "flex",
		top: $( this ).offset().top + $( window ).scrollTop() - 150
	} );

	$( "video" ).attr( "src", "./demos/spaetifinder_demo.mp4" )
	// demo.get().play();

} )

$( "#petition" ).on( "click", () => {

	$( ".video" ).css( {
		display: "flex",
		top: $( this ).offset().top + $( window ).scrollTop() - 150
	} );
	$( "video" ).attr( "src", "./demos/petition_demo.mp4" )
	// demo.get().play();

} )

$( "#connect4" ).on( "click", () => {

	$( ".video" ).css( {
		display: "flex",
		top: $( this ).offset().top + $( window ).scrollTop() - 150
	} );
	$( "video" ).attr( "src", "./demos/connect4_demo.mp4" )
	// demo.get().play();
	$( "body" ).css( "overflow", "hidden" )
} )

$( ".video" ).on( "click", () => {
	console.log( "closing modal" );
	$( ".video" ).css( {
		display: "none"
	} );
	// demo.get().pause();
} )


//send E-Mail //
var mail = $( "#mail" )
mail.on( "click", () => {
	console.log( "CLICK" );
	var part1 = "parinazroghany";
	var extra = Math.pow( 2, 6 );
	var part2 = String.fromCharCode( extra );
	var part3 = "yahoo.de";
	mail.attr( "href", `mailto:${part1}${part2}${part3}` )

} )