var home = Titanium.UI.createWindow({
    backgroundColor: 'black',
    title: 'Rosters',
});

var win1 = Titanium.UI.iOS.createNavigationWindow({
   window: home
});

var win = Ti.UI.createWindow({
	backgroundColor: "#FBFBF4",
	 title: "Flyers App",
 });


var closeTableButton = Titanium.UI.createButton({
    title: 'Close Table View'
});
closeTableButton.addEventListener('click', function(){
    win1.closeWindow(win, {animated:false});
});

win.add(closeTableButton);

var tableLabel = Ti.UI.createLabel({
	color: "#ffffff",
	font: {fontSize:30},
	text: "Table View",
});
var tableView = Ti.UI.createView({
	backgroundColor: "orange",
	borderColor: "#ffffff",
	width: 350,
	height: 80,
	top:200,
});

var listLabel = Ti.UI.createLabel({
	color: "#ffffff",
	font: {fontSize:30},
	text: "List View",
});

var listView = Ti.UI.createView({
	backgroundColor: "orange",
	borderColor: "#ffffff",
	width: 350,
	height: 80,
	bottom: 200,
	
});
var name = Ti.UI.createLabel({
	color: "orange",
	font: {fontSize:30},
	text: "Flyers Roster",
	top: 60,
});

var data = require("array");
console.log(data.rosterTable);

tableView.addEventListener('click',function(){
	win1.openWindow(win);
	win.add(data.rosterTable);
});

listView.add(listLabel);
tableView.add(tableLabel);
//home.add(table);
home.add(tableView);
//home.add(list);
home.add(listView);
home.add(name);
win1.open();




