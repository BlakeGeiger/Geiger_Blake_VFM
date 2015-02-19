var win = Ti.UI.createWindow({
	backgroundColor: "black",
	top: 20,
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});

var data = require("secondary");

win.add(data.scrollContainer);
win.open();