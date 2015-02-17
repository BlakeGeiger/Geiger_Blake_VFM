// Data array
roster = {

	forwards : {
		title : "Forwards",
		items : [
			{name : "Claude Giroux",
			description : "54 Points"},
			{name : "Jakub Voracek",
			description : "59 Points"},
	 		{name : "Sean Couturier",
			description : "24 Points"}, 
			{name : "Michael Raffl",
			description : "15 Points"}, 
			{name : "Wayne Simmonds",
			description : "34 Points"}]
	},
	defensemen : {
		title : "Defensemen",
		items : [
			{name : "Luke Schenn",
			description : "8 Points"},
			{name : "Mark Streit",
			description : "36 Points"}, 
			{name : "Brayden Coburn",
			description : "6 Points"}, 
			{name : "Andrew MacDonald",
			description : "11 Points"}, 
			{name : "Nick Grossmann",
			description : "8 Points"}]
	},
	Goalies : {
		title : "Goalies",
		items : [
			{name : "Steve Mason",
			description : "2.27 GGA"}, 
			{name : "Ray Emery",
			description : "3.25 GAA"}, 
			{name : "Rob Zepp",
			description : "2.92 GAA"}, 
			{name : "Anthony Stolarz",
			description : "2.57 GAA"}]
	}

};

var detail = function(info) {
	var rosterDetail = Ti.UI.createWindow({
		backgroundColor: "#FEFBFB",
		title: info.title
	});
	var rowDetail = Ti.UI.createLabel({
		text: info.descr

	});
	rosterDetail.add(rowDetail);
	
	win1.openWindow(rosterDetail);
};


var rosterCollection = [];
for (n in roster) {
	
	var rosterSection = Ti.UI.createTableViewSection({
		headerTitle: roster[n].title,
		
	});

	for (var i = 0; i < roster[n].items.length; i++) {

		var row = Ti.UI.createTableViewRow({
			title: roster[n].items[i].name,
			descr: roster[n].items[i].description,
		});
		row.addEventListener('click', function(e){
			detail(e.source);
		});
		rosterSection.add(row);
	}
	rosterCollection.push(rosterSection);
}


var rosterTable = Ti.UI.createTableView({
	separatorColor: "black",
	headerTitle: "Roster",
	top: 0,
});
rosterTable.setData(rosterCollection);



//device detection 
var osName = Ti.Platform.name;
if(osName === "iPhone OS"){
	rosterTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	
}

exports.rosterTable = rosterTable;

