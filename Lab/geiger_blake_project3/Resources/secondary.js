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
		height: pHeight/6,
		width: pWidth/4,
		borderColor: "black",
	});
	scrollContainer.add(imageView);
}


exports.scrollContainer = scrollContainer;

