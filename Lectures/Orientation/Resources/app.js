var win = Ti.UI.createWindow({
	backgroundColor: 'black',
	orientationModes: [
	Titanium.UI.PORTRAIT_LEFT,
	Titanium.UI.PORTRAIT_RIGHT,
	Titanium.UI.PORTRAIT,
	Titanium.UI.UPSIDE_PORTRAIT,
	],
});

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var scrollContainer = Ti.UI.createScrollView({
  layout: 'horizontal',
  contentWidth: pWidth,
  top: 20,
});


var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var galleryList = gallery.getDirectoryListing();



for(var i=0; i<galleryList.length; i++){
	
	var imageView = Ti.UI.createImageView({
		image: "images/" + galleryList[i],
		height: pHeight/6,
		width: pWidth/4,
		borderColor: "black",
	});
	scrollContainer.add(imageView);
	
	for(var i=0; i<imageView.children; i++){
		var changeSize = function(){
		pWidth = Ti.Platform.displayCaps.platformWidth;
		pHeight = Ti.Platform.displayCaps.platformHeight;
		imageView.width = pWidth/10;
		imageView.height = pHeight/3;
		};

	};
	
};


Ti.Gesture.addEventListener('orientationchange', changeSize);

win.add(scrollContainer);
win.open();
