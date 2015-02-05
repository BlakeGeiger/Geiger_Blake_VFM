var win = Ti.UI.createWindow({
	backgroundColor: "#4b91c3",
});
var label1 = Ti.UI.createLabel({
  color: "#fff",
  font: { fontSize:18 },
  text: 'Blake and Kendyl',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  top: 5,
  width: 200, height: 100
});
var view3 = Ti.UI.createView({
	backgroundImage: "mountain.jpg",
	width: 300,
	height: 200,
	top: 67,
});
var view1 = Ti.UI.createView({
	backgroundImage: "bacon.jpg",
	width: 300,
	height: 200,
	bottom: 200,
});
var view2 = Ti.UI.createView({
	backgroundImage: "galaxy.jpg",
	width: 300,
	height: 200,
	bottom: 10,
});


win.add(label1);
win.add(view1);
win.add(view2);
win.add(view3);
win.open();
