// initial window
var tvWin = Ti.UI.createWindow ({
	headertitle: "Groceries App",
	backgroundColor: "green",
	fullscreen: true
	
	
});
// data array
var theArray = [
 {"breakfastItems" : 
 	title: "bacon",
	title: "eggs",
	title: "cereal",
	title: "milk",
	title: "orange juice"},
 {lunchItems = 
	{title: "bread"},
	{title: "cheese"},
	{title: "bologna"},
	{title: "chips"},
	{title: "soda"}},
 {dinnerItems = 
	{title: "chicken"},
	{title: "broccoli"},
	{title: "rice"},
	{title: "water"},
	{title: "kidney beans"}}];

// views
var breakfastHeader = Ti.UI.createView({
	backgroundColor: "blue"
	
});

var breakfastLabel = Ti.UI.createTableView({
	backgroundColor: "fff",
	text: "breakfast",
	headerView: breakfastHeader
});
breakfastHeader.add(breakfastLabel);

var lunchHeader = Ti.UI.createView({
	backgroundColor: "blue"
	
});

var lunchLabel = Ti.UI.createTableView({
	backgroundColor: "fff",
	text: "breakfast",
	headerView: lunchHeader
});
lunchHeader.add(lunchLabel);

var dinnerHeader = Ti.UI.createView({
	backgroundColor: "blue"
	
});

var dinnerLabel = Ti.UI.createTableView({
	backgroundColor: "fff",
	text: "breakfast",
	headerView: dinnerHeader
});
dinnerHeader.add(dinnerLabel);


// table view sections
var breakfastSection = Ti.UI.createTableViewSection({
	headerTitle: "breakfast"
	
	
});
var lunchSection = Ti.UI.createTableViewSection({
	headerTitle: "lunch"
	
	
});
var dinnerSection = Ti.UI.createTableViewSection({
	headerTitle: "lunch"
	
	
});
//rows and sections
var row = Ti.UI.createTableViewRow({
	title: breakfastItems[0].title
	
});
breakfastSection.add(row);



//table view
var tableView = Ti.UI.createTableView ({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	data: [breakfastSection, lunchSection],
	separatorColor: "green",
	headerTitle: "Groceries",
	
});

// add table view section change color of rows



// device detection 
var osName = Ti.Platform.name;
if(osName === "iPhone OS"){
	tableView.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	
};

// open
tvWin.add(tableView);
tvWin.open();
