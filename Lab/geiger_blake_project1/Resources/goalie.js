//goaltenders
var mase = Ti.UI.createView({
	backgroundImage: "mase.jpg",
	borderColor: "orange",
	width: 120,
	height: 100,
	left: 20,
	top: 40
});
var rask = Ti.UI.createView({
	backgroundImage: "rask.jpg",
	borderColor: "yellow",
	width: 120,
	height: 100,
	right: 20,
	top: 40
});
var steve = Ti.UI.createLabel({
	color: "#ffffff",
	font: {fontSize:17},
	left: 20,
	text: "Steve Mason \n11-12-7 Record \n2.30 GAA \n.925 SV%",
	width: 130,
	height: 100,
	top: 150
});
var tuuk = Ti.UI.createLabel({
	color: "#ffffff",
	font: {fontSize:17},
	right: 20,
	text: "Tuukka Rask \n22-12-7 Record \n2.33 GAA \n.921 SV%",
	width: 130,
	height: 100,
	top: 150
});
var previous = Ti.UI.createLabel({
	color: "#90ffffff",
	font: {fontSize:14},
	left: 10,
	text: "<Previous",
	width: 130,
	height: 20,
	top: 240,
	
});
var next = Ti.UI.createLabel({
	color: "#90ffffff",
	font: {fontSize:14},
	right: 10,
	text: "Next>",
	width: 40,
	height: 20,
	top: 240,
	
});
var view4 = Ti.UI.createView({
	backgroundColor: "orange",
	//propeties
	width: 375,
	height: 30,
	top: 0,

});
var goalies = Ti.UI.createLabel({
	color: "#ffffff",
	font: {fontSize:14},
	text: "Top Goalies",
	width: 100,
	height:30,
	top: 1
});
goalieView.add(mase, steve, rask, tuuk, previous, next, view4, goalies);

exports.goalieView = goalieView;