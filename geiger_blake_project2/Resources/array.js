// Data array
roster = {

	forwards : {
		title : "Forwards",
		items : [
			{name : "Claude Giroux",
			description : "54 Points",
			position : "Center"},
			{name : "Jakub Voracek",
			description : "59 Points",
			position : "Right Wing"},
	 		{name : "Sean Couturier",
			description : "24 Points",
			position : "Center"}, 
			{name : "Michael Raffl",
			description : "15 Points",
			position : "Left Wing"}, 
			{name : "Wayne Simmonds",
			description : "34 Points",
			position : "Right Wing"}]
	},
	defensemen : {
		title : "Defensemen",
		items : [
			{name : "Luke Schenn",
			description : "8 Points",
			position : "Defenseman"},
			{name : "Mark Streit",
			description : "36 Points",
			position : "Defenseman"}, 
			{name : "Brayden Coburn",
			description : "6 Points",
			position : "Defenseman"}, 
			{name : "Andrew MacDonald",
			description : "11 Points",
			position : "Defenseman"}, 
			{name : "Nick Grossman",
			description : "8 Points",
			position : "Defenseman"}]
	},
	Goalies : {
		title : "Goalies",
		items : [
			{name : "Steve Mason",
			description : "2.27 GGA",
			position : "Goalie"}, 
			{name : "Ray Emery",
			description : "3.25 GAA",
			position : "Goalie"}, 
			{name : "Rob Zepp",
			description : "2.92 GAA",
			position : "Goalie"}, 
			{name : "Anthony Stolarz",
			description : "2.57 GAA",
			position : "Goalie"}]
	}

};

var getDetail = function(info) {
	var detail = Ti.UI.createWindow({
		backgroundColor : "#FBFBF4",
		title : info.title
	});
	var row = Ti.UI.createLabel({
		text : info.description

	});
	detail.add(row);
	win.openWindow(detail);
};

//Rows and Sections

for (n in roster) {
	var rosterCollection = [];

	var rosterSection = Ti.UI.createTableViewSection({
		headerTitle : roster[n].title,
		
	});

	for (var i = 0; i < roster[n].items.length; i++) {

		var row = Ti.UI.createTableViewRow({
			title : roster[n].items[i].name,
			description: roster[n].items[i].description,
			position: roster[n].items[i].position,
		});
		
		rosterSection.add(row);
	}
	rosterCollection.push(rosterSection);
}


var rosterTable = Ti.UI.createTableView({
	data: rosterCollection,
	separatorColor: "black",
	headerTitle: "Roster",
	top: 0,
});

//device detection 
var osName = Ti.Platform.name;
if(osName === "iPhone OS"){
	rosterTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	
}

exports.rosterTable = rosterTable;


