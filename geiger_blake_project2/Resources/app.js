var home = Ti.UI.createWindow({
	backgroundColor: "#000000",
	 statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
});

var table = Ti.UI.createLabel({
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

var list = Ti.UI.createLabel({
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

tableView.addEventListener('click',function(){
	win.add(table);
	win.open();

});

listView.add(list);
tableView.add(table);
//home.add(table);
home.add(tableView);
//home.add(list);
home.add(listView);
home.add(name);

home.open();
//create window
var win = Ti.UI.createWindow({
	backgroundColor: "#FBFBF4",
	title: "Flyers App",
});

// data array
var roster = {
 forwards :[ 
 	{title: "Claude Giroux"},
	{title: "Jakub Voracek"},
	{title: "Wayne Simmonds"},
	{title: "Michael Raffl"},
	{title: "Sean Couturier"}],
 defensemen :[
	{title: "Luke Schenn"},
	{title: "Mark Streit"},
	{title: "Brayden Coburn"},
	{title: "Andrew MacDonald"},
	{title: "Nick Grossman"}],
 goalies :[
	{title: "Steve Mason"},
	{title: "Ray Emery"},
	{title: "Rob Zepp"},
	{title: "Anthoney Stolarz"}],
	};
	
// views
var forwardsHeader = Ti.UI.createView({
	backgroundColor: "orange"
	
});

var forwardsLabel = Ti.UI.createLabel({
	text: "Forwards",
	color: "white",
});
forwardsHeader.add(forwardsLabel);

var forwardsSection = Ti.UI.createTableViewSection({
	headerView : forwardsHeader,
});

var defensemenHeader = Ti.UI.createView({
	backgroundColor: "orange"
	
});

var defensemenLabel = Ti.UI.createLabel({
	text: "Defensemen",
	color: "white",
});
defensemenHeader.add(defensemenLabel);

var defensemenSection = Ti.UI.createTableViewSection({
	headerView : defensemenHeader,
});

var goaliesHeader = Ti.UI.createView({
	backgroundColor: "orange"
	
});

var goaliesLabel = Ti.UI.createLabel({
	text: "Goalies",
	color: "white",
});
goaliesHeader.add(goaliesLabel);

var goaliesSection = Ti.UI.createTableViewSection({
	headerView : goaliesHeader,
});

//ADD ROWS TO SECTIONS
for(i=0; i< roster.forwards.length; i++){
var forwardsRow = Ti.UI.createTableViewRow({
	title: roster.forwards[i].title,
});
	forwardsSection.add(forwardsRow);
}

for(i=0; i< roster.defensemen.length; i++){
var defensemenRow = Ti.UI.createTableViewRow({
	title: roster.defensemen[i].title,
});
	defensemenSection.add(defensemenRow);
}

for(i=0; i< roster.goalies.length; i++){
var goaliesRow = Ti.UI.createTableViewRow({
	title: roster.goalies[i].title,
});
	goaliesSection.add(goaliesRow);
}
//table view, and sections
var table = Ti.UI.createTableView({
	//style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	data: [forwardsSection, defensemenSection, goaliesSection],
	separatorColor: "black",
	headerTitle: "Roster",
	top: 20,
});

//device detection 
var osName = Ti.Platform.name;
if(osName === "iPhone OS"){
	table.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	
}
//open
//win.open();
//
