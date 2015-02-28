var winArtwork = Titanium.UI.createWindow({  
    backgroundColor:'black',
    title: 'Album Artwork',
});

var ranFunction = function(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
};

var ranLabel = Ti.UI.createLabel({
	
});

var albumButton = Titanium.UI.createButton({
    title:'View Albums',
    width:300,
    height:40,
    bottom: 30
});

var ranGenerator = Ti.UI.createView({
	width: pWidth
	
});

winArtwork.add(albumButton);

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "dg");
var galleryList = gallery.getDirectoryListing();

for(var i=0; i<galleryList.length; i++){
	
	var imageView = Ti.UI.createImageView({
		image: "dg/" + galleryList[i],
		id: i,
	});

}

albumButton.addEventListener('click',function(){
	nav.openWindow();
});


exports.winArtwork = winArtwork;
