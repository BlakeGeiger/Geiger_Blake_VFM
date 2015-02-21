var win = Ti.UI.createWindow({
	backgroundColor: 'black',
	orientationModes: [
	Titanium.UI.PORTRAIT_LEFT,
	Titanium.UI.PORTRAIT_RIGHT,
	Titanium.UI.PORTRAIT,
	],
});



var box = Ti.UI.createView({
	width: 200,
	height: 200,
	backgroundColor: 'blue',
});

var changeSize = function(){
	pWidth = Ti.Platform.displayCaps.platformWidth;
	pHeight = Ti.Platform.displayCaps.platformHeight;
	box.width = pWidth/2;
	box.height = pHeight/4;
};

Ti.Gesture.addEventListener('orientationchange', changeSize);

win.add(box);
win.open();
