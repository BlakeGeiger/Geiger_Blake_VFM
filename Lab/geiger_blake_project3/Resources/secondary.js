var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var scrollContainer = Ti.UI.createScrollView({
  layout: 'horizontal',
  contentWidth: pWidth,
  top: 0
});

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "cars");
var galleryList = gallery.getDirectoryListing();



for(var i=0; i<galleryList.length; i++){
	
	var imageView = Ti.UI.createImageView({
		image: "cars/" + galleryList[i],
		// height: pHeight/6,
		width: pWidth/1.25,
		//borderColor: "black",
		id: i,
	});
	var mask = Ti.UI.createView({
	borderRadius: 0,
	//borderColor: 'white',
	backgroundColor: 'transparent',
	height: pHeight/6,
	width: pWidth/4,
});
	mask.add(imageView);
	scrollContainer.add(mask);
}


exports.scrollContainer = scrollContainer;

