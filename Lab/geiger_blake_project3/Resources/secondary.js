var pWidth = Ti.Platform.displayCaps.platformWidth;

var scrollContainer = Ti.UI.createScrollView({
  layout: 'horizontal',
  contentWidth: pWidth*2,
});

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "cars");
var galleryList = gallery.getDirectoryListing();



for(var i=0; i<galleryList.length; i++){
	
	var imageView = Ti.UI.createImageView({
		image: "cars/" + galleryList[i],
		height: 200,
		width: pWidth/2,
		borderColor: "black",
	});
	scrollContainer.add(imageView);
	
}


exports.scrollContainer = scrollContainer;