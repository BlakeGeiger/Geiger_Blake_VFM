var win = Ti.UI.createWindow({
	backgroundColor: "black",
	title: "Super Cars"
});


var nav = Titanium.UI.iOS.createNavigationWindow({
   window: win
});

var photoWin = Ti.UI.createWindow({
	backgroundColor: 'black',
});


var data = require("secondary");
var scrollableData = require("scrollable");

data.scrollContainer.addEventListener('click', function(){
		nav.openWindow(scrollableData.winScrollable);
	});

win.add(data.scrollContainer);
nav.open();











