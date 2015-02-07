//defenseman
var streit = Ti.UI.createView({
	backgroundImage: "mark.jpg",
	borderColor: "orange",
	width: 120,
	height: 100,
	left: 20,
	top: 40
});
var chara = Ti.UI.createView({
	backgroundImage: "chara.jpg",
	borderColor: "yellow",
	width: 120,
	height: 100,
	right: 20,
	top: 40

});
var mark = Ti.UI.createLabel({
	color: "#ffffff",
	font: {fontSize:17},
	left: 20,
	text: "Mark Streit \n35 Points \n7 Goals \n28 Assists",
	width: 120,
	height: 100,
	top: 150
});
var bigZ = Ti.UI.createLabel({
	color: "#ffffff",
	font: {fontSize:17},
	right: 20,
	text: "Zdeno Chara \n13 Points \n3 Goals \n10 Assists",
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
var defense = Ti.UI.createLabel({
	color: "#ffffff",
	font: {fontSize:14},
	text: "Top Defenders",
	width: 100,
	height:30,
	top: 1
});
defenseView.add(mark, streit, bigZ, chara, previous, next, view4, defense);

exports.defenseView = defenseView;



