var win = Ti.UI.createWindow({
	 backgroundColor: "#000000",
	 statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
});



win.open();
var loadFile = require('secondary');
win.add(loadFile.view1);
win.add(loadFile.view2);
win.add(loadFile.view3);

