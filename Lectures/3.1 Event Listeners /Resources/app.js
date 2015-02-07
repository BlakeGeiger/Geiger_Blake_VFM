var win = Ti.UI.createWindow({
	backgroundColor: "#88D6D7",
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
});

var view = Ti.UI.createView({
	backgroundImage: "nice.jpg",
	height: 200, 
	width: 300,
	viewShadowColor: "#C9625E"
});

//add event listener
view.addEventListener('click', function(event){
	alert("I've been clicked!");
	console.log(event);
	
});

win.open();
win.add(view);

