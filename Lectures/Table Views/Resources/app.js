//create window
var win = Ti.UI.createWindow({
	backgroundColor: "#7DA8D4",
	title: "Groceries App",
});

//create array
//var breakfastItems = ["Bacon", "Eggs", "Frosted Flakes", "Milk", "Orange Juice"];
var breakfastItems = [
{title: "Bacon"},
{title: "Eggs"},
{title: "Frosted Flakes"},
{title: "Milk"},
{title: "Orange Juice"},
];
var lunchItems = [
{title: "Bread"},
{title: "Cheese"},
{title: "Balogna"},
{title: "Chips"},
{title: "Soda"},
];
var dinnerItems = [
{title: "Chicken"},
{title: "Broccoli"},
{title: "Rice"},
{title: "Water"},
{title: "Kidney Beans"},
];
var breakfastHeader = Ti.UI.createView({
	backgroundColor: "#7DA8D4",
});
var breakfastLabel = Ti.UI.createLabel({
	color: "#fff",
	text: "Breakfast"
});
breakfastHeader.add(breakfastLabel);

var breakfastSection = Ti.UI.createTableViewSection({
	//headerTitle: "Breakfast",
	headerView : breakfastHeader,
	footerTitle: "8:00AM - 10:30AM"
});
var lunchHeader = Ti.UI.createView({
	backgroundColor: "#7DA8D4",

});
var lunchLabel = Ti.UI.createLabel({
	color: "#fff",
	text: "Lunch",
});
lunchHeader.add(lunchLabel);
var lunchSection = Ti.UI.createTableViewSection({
	headerView: lunchHeader,
	footerTitle: "11:30AM - 1:00PM"
});
var dinnerHeader = Ti.UI.createView({
	backgroundColor: "#7DA8D4",
});
var dinnerLabel = Ti.UI.createLabel({
	color: "#fff",
	text: "Dinner"
});
dinnerHeader.add(dinnerLabel);

var dinnerSection = Ti.UI.createTableViewSection({
	headerView : dinnerHeader,
	footerTitle: "5:00PM - 9:00PM"
});

//ADD ROWS TO SECTIONS
for()
var row = Ti.UI.createTableViewRow({
	title: breakfastItems[0].title,
});

breakfastSection.add(row);

//table view, and sections
var table = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	data: [breakfastSection, lunchSection, dinnerSection],
	//backgroundColor: "#7DA8D4",
	separatorColor: "#7DA8D4",
	headerTitle: "Groceries",
	top: 20,
});

//TODO: Add tableview sections to table
//TODO: Change color of rows

//device detection 
var osName = Ti.Platform.name;
if(osName === "iPhone OS"){
	table.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	
}
//open
win.open();
win.add(table);

