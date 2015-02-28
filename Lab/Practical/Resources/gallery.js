var pWidth = Ti.Platform.displayCaps.platformWidth;

var winArtwork = Titanium.UI.createWindow({  
    backgroundColor:'black',
    title: 'Album Artwork',
});

var albumArray = ["dg/exmilitary.jpg", "dg/gov.jpg", "dg/money.jpg", "dg/nldp.jpg", "dg/powers.jpg"];

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
	width: pWidth,
	height: 350,
});

winArtwork.add(albumButton);

albumButton.addEventListener('click',function(){
	animated: true,
	ranGenerator.setBackgroundImage(albumArray[ranFunction(1, albumArray.length) - 1]);
});

winArtwork.add(ranGenerator);


exports.winArtwork = winArtwork;
