# Code copyright www.weks.ws 2021 & J^raxis
# Code is not licensed for use, and may not be reused or redistributed
# I just ripped it to save for posterity in case the site ever goes offline, or if J^raxis ever dies, I will buy the domain and I will revive it. For the Weks!

/* â€œDancing Weksâ€ JavaScript for weks.ws
 *
 * $Id: dancing-weks.js 3802 2015-04-22 17:10:07Z egregore $ */



var browser;
var inverted = 0;

if( document.all == null ) {
	var versionNN = navigator.userAgent.toLowerCase();
	if( versionNN.search( /mozilla\/4/i ) != -1 )
		browser = 'NN4';
	else
		browser = 'NN6';
} else {
	var agent = navigator.userAgent.toLowerCase();
	if(( agent.indexOf( 'msie' ) != -1 ) && ( agent.indexOf( 'opera' ) == -1 ))
		browser = 'IE';
	else
		browser = 'OP';
};

function getLayer( id ) {
	if( browser == 'IE' || browser == 'OP' )
		return( document.all[ id ]);
	else if( browser == 'NN4' )
		return( document.layers[ id ]);
	return( document.getElementById( id ));
};



function weksdance() {
	var weks = getLayer( 'weksdance' );
	var butt = getLayer( 'weksbutt'  );
	w = (w+1) % wekses.length;
	weks.innerHTML = wekses[w].replace( ' ', '&nbsp;' );
	if( inverted ) {
		weks.style.color = '#000';
		butt.style.backgroundColor = '#FFF';
	} else {
		weks.style.color = '#FFF';
		butt.style.backgroundColor = '#000';
	};
	inverted = !inverted;
	setTimeout( 'weksdance()', 120 );
};

var w = 0;
var wekses = new Array(
	'  -_-  ', '  -_-  ', '  -_-  ', '  -_-  ',
	'  -_-  ', '  -_-  ', '  -_-  ', '  -_-  ',
	'  -_^  ', '  ^_^  ', '  ^_^  ', '  ^_^  ',
	'  ^_^  ', '  ^_^  ', '  ^_^  ', '  ^_^  ',
	'  o_^  ', '  O_^  ', '  O_o  ', '  O_O  ',
	'  O_O  ', '  O_O  ', '  O_@  ', '  @_@  ',
	'  @_@  ', '  @o@  ', '  @O@  ', '  @o@  ',
	' _@o@_ ', '\\@o@_  ', ' \\@o@/ ', '  _@o@/',
	' _@o@_ ', '\\@o@_  ', ' \\@o@/ ', '  _@o@/',
	' _@o@_ ', '\\@o@_  ', ' \\@o@/ ', '  _@o@/',
	' \\@o@_ ',
	' _@O@/ ',
	' \\@o@_ .',
	' _@O@/ ..',
	' \\@o@_ ...',
	' _@O@/ ...w',
	' \\@o@_ ...we',
	' _@O@/ ...wek',
	' \\@o@_ ...weks',
	'_@O@/  ...weks!',
	' \\@o@_ ...weks!!',
	'  _@O@/...weks!!',
	' \\@o@_ ...weks!!!',
	'_@O@/  ...weks!!!',
	' \\@o@_ ...weks!!!!',
	'  _@O@/...weks!!!!',
	' \\@o@_ ...weks!!!!!',
	'_@O@/  ...weks!!!!!',
	' \\@o@_ ...weks!!!!!',
	'  \\@O@/...weks!!!!!',
	' \\@o@/ ...weks!!!!!',
	' \\@O@/ ...weks!!!!!',
	' \\@o@/ ...weks!!!!!',
	' \\@O@/ ...weks!!!!!',
	' \\@o@/ ...weks!!!!!',
	' \\@O@/ ...weks!!!!!',
	' \\@o@/',
	' _@O@/',
	' \\@O@/',
	' \\@o@/',
	' _@o@/',
	' _@o@_',
	'  @_@ ',
	'  O_@',
	'  O_O',
	'  o_O', '  o_O',
	'  o_o', '  o_o', '  o_o', '  o_o',
	'  -_o',
	'  -_-'
);
