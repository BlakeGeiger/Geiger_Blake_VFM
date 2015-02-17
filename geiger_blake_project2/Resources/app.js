var home = Titanium.UI.createWindow({
    backgroundColor: 'black',
    backgroundImage: "flyers.jpg",
    title: 'Flyers App',
});

var win1 = Titanium.UI.iOS.createNavigationWindow({
   window: home
});

var winTable = Ti.UI.createWindow({
	backgroundColor: "#FBFBF4",
	 title: "Player Stats",
 });

 var winView = Ti.UI.createWindow({
 	backgroundColor: "FBFBF4",
 	title: "Player Bios"
 });

var tableLabel = Ti.UI.createLabel({
	color: "#ffffff",
	font: {fontSize:20},
	text: "Player Stats",
});
var tableView = Ti.UI.createView({
	backgroundColor: "orange",
	borderColor: "#ffffff",
	width: 150,
	height: 80,
	bottom: 100,
	left: 20,
});

var listLabel = Ti.UI.createLabel({
	color: "#ffffff",
	font: {fontSize:20},
	text: "Player Bios",
});

var listView = Ti.UI.createView({
	backgroundColor: "orange",
	borderColor: "#ffffff",
	width: 150,
	height: 80,
	bottom: 100,
	right: 20,
	
});

var dataTable = require("array");
var dataView = require("listView");

tableView.addEventListener('click',function(){
	win1.openWindow(winTable);
	winTable.add(dataTable.rosterTable);
});

listView.addEventListener('click', function(){
	win1.openWindow(winView);
	winView.add(dataView.list);
});


listView.add(listLabel);
tableView.add(tableLabel);
//home.add(table);
home.add(tableView);
//home.add(list);
home.add(listView);
win1.open();




