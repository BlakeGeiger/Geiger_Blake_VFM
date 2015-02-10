//this is a variable
var win = Ti.UI.createWindow({
	backgroundColor: "#000000",
	 statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
});

var view1 = Ti.UI.createView({
	backgroundColor: "orange",
	//propeties
	width: 375,
	height: 30,
	top:17,
});
//ti.UI.createLabel is a method 
//the whole thing is the object
var label1 = Ti.UI.createLabel({
  color: "#fff",
  font: { fontSize:14 },
  text: 'PHI vs BOS',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  top: 22,
  width: 100, height: 20
});

var fly = Ti.UI.createView({
	backgroundImage: "flyLogo.jpg",
	left: 20,
	width: 50,
	height: 50,
	top: 55
}) ;
var bru = Ti.UI.createView({
	backgroundImage: "bruLogo.jpg",
	right: 20,
	width: 50,
	height: 40,
	top: 60
});
//array
var arr = ["PHI", "BOS", "22-22-7", "27-17-7", "Matchup", "Point Leaders", "Rosters", "Buy>"];
var phi = Ti.UI.createLabel({
	color: "#cccccc",
	font: {fontSize:14},
	left: 70,
	text: arr[0],
	width: 100,
	height: 20,
	top: 75
});
var bos = Ti.UI.createLabel({
	color: "#cccccc",
	font: {fontSize:14},
	right: 5,
	text: arr[1],
	width: 100,
	height: 20,
	top: 75
});
var phiRec = Ti.UI.createLabel({
	color: "#cccccc",
	font: {fontSize:14},
	left: 70,
	text: arr[2],
	width: 100,
	height: 20,
	top: 90
});
var bosRec = Ti.UI.createLabel({
	color: "#cccccc",
	font: {fontSize:14},
	right: 25,
	text: arr[3],
	width: 100,
	height: 20,
	top: 90
});
var match = Ti.UI.createLabel({
	color: "#ffffff",
	font: {fontSize:20},
	left: 45,
	text: arr[4],
	width: 100,
	height: 40,
	top: 135
});
var ros = Ti.UI.createLabel({
	color: "#cccccc",
	font: {fontSize:20},
	right: 45,
	text: arr[6],
	width: 100,
	height: 40,
	top: 135
});
var view2 = Ti.UI.createView({
	backgroundColor: "orange",
	borderColor: "#ffffff",
	width: 187,
	height: 40,
	top:135,
	left: 0
});
var view3 = Ti.UI.createView({
	backgroundColor: "90cccccc",
	width: 187,
	height: 40,
	top:135,
	right: 0
});
var buy = Ti.UI.createLabel({
	color: "#66A2CC",
	font: {fontSize:14},
	text: arr[7],
	width: 100,
	height: 20,
	top: 100,
	left: 170
});

var view4 = Ti.UI.createView({
	backgroundColor: "orange",
	//propeties
	width: 375,
	height: 30,
	top: 0,

});
var points = Ti.UI.createLabel({
	color: "#ffffff",
	font: {fontSize:14},
	text: arr[5],
	width: 100,
	height:30,
	top: 175
});
var giroux = Ti.UI.createView({
	backgroundImage: "g.jpg",
	borderColor: "orange",
	width: 120,
	height: 100,
	left: 20,
	top:40,
	
});
var berg = Ti.UI.createView({
	backgroundImage: "berg.jpg",
	borderColor: "yellow",
	width: 120,
	height: 100,
	right: 20,
	top:40,
});
var claude = Ti.UI.createLabel({
	color: "#ffffff",
	font: {fontSize:17},
	left: 20,
	text: "Claude Giroux \n52 Points \n16 Goals \n36 Assists",
	width: 120,
	height: 100,
	top: 150,
	
});
var patrice = Ti.UI.createLabel({
	color: "#ffffff",
	font: {fontSize:17},
	right: 20,
	text: "Patrice Bergeron \n34 Points \n13 Goals \n21 Assists",
	width: 130,
	height: 100,
	top: 150,

});
var previous = Ti.UI.createLabel({
	color: "#90ffffff",
	font: {fontSize:14},
	left: 10,
	text: "<Previous",
	width: 130,
	height: 20,
	top: 420,
	
});
var next = Ti.UI.createLabel({
	color: "#90ffffff",
	font: {fontSize:14},
	right: 10,
	text: "Next>",
	width: 40,
	height: 20,
	top: 420,
	
});
var pointView = Ti.UI.createView({
	backgroundColor: "transparent",
	top:175,
});
var defenseView = Ti.UI.createView({
	backgroundColor: "black",
	top:175,
	bottom:250,
});
var goalieView = Ti.UI.createView({
	backgroundColor: "black",
	top: 175,
	bottom:250,
});


win.open();
win.add(view1);
win.add(label1);
win.add(fly);
win.add(bru);
win.add(phi);
win.add(bos);
win.add(phiRec);
win.add(bosRec);
win.add(view2);
win.add(view3);
win.add(match);
win.add(ros);
win.add(buy);
pointView.add(giroux, berg, claude, patrice, view4, next, previous);
win.add(pointView);
win.add(points);
win.add(previous);
win.add(next);

	var goalie = require('goalie');
	
	var defense = require('defense');
	

var arrViews = [pointView, defenseView, goalieView];

var counter = 0;

//if counter < max
//increase the counter
//add based on counter



previous.addEventListener('click',function(){
	counter--;
	win.add(arrViews[counter]);
});
next.addEventListener('click',function(){
	if(counter<arrViews.length-1){
		counter ++;
		win.add(arrViews[counter]);
		console.log("increased");
	}else{
		counter=0;
		win.add(arrViews[counter]);
		console.log("reset");
	}
	
	
});
