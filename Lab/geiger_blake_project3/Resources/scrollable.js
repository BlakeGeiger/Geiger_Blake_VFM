var pWidth = Ti.Platform.displayCaps.platformWidth;

var winScrollable = Ti.UI.createWindow({
	backgroundColor: 'black',
});

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "cars");
var galleryList = gallery.getDirectoryListing();

var section = [];
for(var i=0; i<galleryList.length; i++){
	
	var imageView = Ti.UI.createImageView({
		image: "cars/" + galleryList[i],
		width: pWidth,
	});
	var imageWrapper = Ti.UI.createScrollView({
		maxZoomScale:4.0,
	});
	imageWrapper.add(imageView);
	
	section.push(imageWrapper);
}

var photosView = Ti.UI.createScrollableView({
    showPagingControl:true,
    views:	section
});
winScrollable.add(photosView);

exports.winScrollable = winScrollable;
exports.photosView = photosView;
