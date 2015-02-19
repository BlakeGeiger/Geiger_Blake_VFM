var win = Ti.UI.createWindow({
	backgroundColor: "ffffff",
	layout: "horizontal",
	top: 20,
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});

makeViews = function(){
		for(i=0; i<10; i++){
		var view = Ti.UI.createView({	
			backgroundColor: "red",
			width: 100,
			height: 100,
			bottom: 2,
			left: 2,
		});
		var newLabel = Ti.UI.createLabel({
			color: "fff",
			text: "Square #" +i,
		});
		view.add(newLabel);
		win.add(view);
		
	}
};

makeViews();

win.open();
