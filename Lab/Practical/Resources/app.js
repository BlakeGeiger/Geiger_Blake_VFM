var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "dg");
var galleryList = gallery.getDirectoryListing();

var winHome = Titanium.UI.createWindow({
    backgroundImage: "death.jpg",
    title: 'Death Grips',
});

var nav = Titanium.UI.iOS.createNavigationWindow({
   window: winHome
});

var winGallery = Ti.UI.createWindow({
	backgroundColor: "#FBFBF4",
	 title: "Album Artwork",
 });
 
  var winTable = Ti.UI.createWindow({
 	backgroundColor: "FBFBF4",
 	title: "Track Listing"
 });

var artworkLabel = Ti.UI.createLabel({
	color: "white",
	font: {fontSize:15},
	text: "Album Artwork",
});
var artworkView = Ti.UI.createView({
	backgroundColor: "black",
	borderColor: "white",
	width: 120,
	height: 35,
	bottom: 130,
	right: 20,
});

var tableLabel = Ti.UI.createLabel({
	color: "white",
	font: {fontSize:15},
	text: "Track Listing",
});

var tableView = Ti.UI.createView({
	backgroundColor: "black",
	borderColor: "white",
	width: 120,
	height: 35,
	bottom: 75,
	right: 20,
	
});

var audioLabel = Ti.UI.createLabel({
	color: "white",
	font: {fontSize:15},
	text: "Singles",
});

var audioView = Ti.UI.createView({
	backgroundColor: "black",
	borderColor: "white",
	width: 120,
	height: 35,
	bottom: 20,
	right: 20

	
});


var dataArtwork = require("gallery");
var dataTracks = require("table");
var dataSingles = require("singles");

artworkView.add(artworkLabel);
tableView.add(tableLabel);
audioView.add(audioLabel);

artworkView.addEventListener('click',function(){
	nav.openWindow(dataArtwork.winArtwork);
});

tableView.addEventListener('click', function(){
	nav.openWindow(winTable);
	winTable.add(dataTracks.albumTable);
});

audioView.addEventListener('click', function(){
	nav.openWindow(dataSingles.winSingles);
});



winHome.add(artworkView);
winHome.add(tableView);
winHome.add(audioView);
nav.open();




