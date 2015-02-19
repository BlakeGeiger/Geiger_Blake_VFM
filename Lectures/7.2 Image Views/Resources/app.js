//DEVICE SIZE
var pWidth = Ti.Platform.displayCaps.platformWidth;
console.log(pWidth);

var win = Ti.UI.createWindow({
	backgroundColor: "black",
	layout: 'vertical',
	top: 20,
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
	
});

var scrollContainer = Ti.UI.createScrollView({
	layout: "vertical",
});

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "jim");
var galleryList = gallery.getDirectoryListing();



for(var i=0; i<galleryList.length; i++){
	
	var imageView = Ti.UI.createImageView({
		image: "jim/" + galleryList[i],
		height: 200,
		width: pWidth,
		borderColor: "black",
	});
	scrollContainer.add(imageView);
	
}
win.add(scrollContainer);
win.open();
