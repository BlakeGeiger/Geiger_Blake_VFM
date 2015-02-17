var winList = Ti.UI.createWindow({
	backgroundColor: "#FEFBFB",
});

var list = Ti.UI.createListView({
	backgroundColor: "#f9f0ec",
	top:0,
});

rosterData = {
	
	forwardsData : {
		title : "Forwards",
		items : [
			{properties:
				{title: "Claude Giroux",
				image: "claude.jpg",
				description: "Hearst, Ontario",
				accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
			{properties:
				{title: "Jakub Voracek",
				image: "jakub.jpg",
				description: "Kladno, Czech Republic",
				accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
			{properties:
				{title:"Sean Couturier", 
				image: "coots.jpg", 
				description: "Phoenix, Arizona",
				accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
			{properties:
				{title:"Michael Raffl", 
				image: "raff.jpg", 
				description: "Villach, Austria",
				accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
			{properties:
				{title:"Wayne Simmonds", 
				image: "simmer.jpg", 
				description: "Scarborough, Ontario",
				accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}}]
	},
	defensemenData : {
		title : "Defensemen",
		items : [
			{properties:
				{title: "Luke Schenn", 
				image: "luke.jpg", 
				description: "Saskatoon, Saskatchewan",
				accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
			{properties:
				{title:"Mark Streit", 
				image: "streit.jpg", 
				description: "Bern, Switzerland",
				accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
			{properties:
				{title:"Brayden Coburn", 
				image: "cobs.jpg", 
				description: "Shaunavon, Saskatchewan",
				accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
			{properties:
				{title:"Andrew MacDonald", 
				image: "andrew.jpg", 
				description: "Judique, Nova Scotia",
				accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
			{properties:
				{title:"Nick Grossmann", 
				image: "grossman.jpg", 
				description: "Stockholm, Sweden",
				accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}}]
	},
	goaliesData : {
		title: "Goalies",
		items: [
		{properties:
			{title: "Steve Mason",
			image: "mase.jpg", 
			description: "Oakville, Ontario",
			accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
		{properties:
			{title:"Ray Emery", 
			image: "razor.jpg", 
			description: "Hamilton, Ontario",
			accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
		{properties:
			{title:"Rob Zepp", 
			image: "zepp.jpg", 
			description: "Scarborough, Ontario",
			accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
		{properties:
			{title:"Anothny Stolarz", 
			image: "stolarz.jpg", 
			description: "Edison, New Jersey",
			accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}}]
	}

};

var detailList = function(info){
	var listDetail = Ti.UI.createWindow({
		backgroundColor: "#FEFBFB",
		title: title.info	
	});
	var rowDetailList = Ti.UI.createLabel({
		text: info.descr
	});
	listDetail.add(rowDetailList);
	win1.openWindow(listDetail);
};

var listSection = [];
for (n in rosterData) {
	var listRoster = Ti.UI.createListSection({
		headerTitle: rosterData[n].title,
	});
	listRoster.setItems(rosterData[n].items);
	listSection.push(listRoster);
}
		
list.sections = listSection;
winList.add(list);
winList.open();

exports.list = list;