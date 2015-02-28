// Data array
albums = {

	exmilitary : {
		title : "Exmilitary",
		items : [
			{name : "Beware",
			description : "5:53"},
			{name : "Guillotine",
			description : "3:43"},
	 		{name : "Spread Eagle Cross the Block",
			description : "3:51"}, 
			{name : "Lord of the Game",
			description : "3:30"}, 
			{name : "Takyon (Death Yon)",
			description : "2:49"},
			{name : "Cut Throat",
			description : "1:12"},
			{name : "Klink",
			description : "3:22"},
			{name : "Culture Shock",
			description : "4:21"},
			{name : "5D",
			description : "0:43"},
			{name : "Thru the Walls",
			description : "3:56"},
			{name : "Known for It",
			description : "4:13"},
			{name : "I Want it I Need it",
			description : "6:16"},
			{name : "Blood Creepin",
			description : "4:50"},]
	},
	moneyStore : {
		title : "The Money Store",
		items : [
			{name : "Get Got",
			description : "2:51"},
			{name : "The Fever (Aye Aye)",
			description : "3:07"}, 
			{name : "Lost Boys",
			description : "3:06"}, 
			{name : "Blackjack",
			description : "2:22"}, 
			{name : "Hustle Bones",
			description : "3:12"},
			{name : "I've Seen Footage",
			description : "3:22"},			
			{name : "Double Helix",
			description : "2:40"},
			{name : "System Blower",
			description : "3:48"},
			{name : "The Cage",
			description : "3:31"},
			{name : "Punk Weight",
			description : "3:24"},
			{name : "F*** That",
			description : "2:24"},
			{name : "B**** Please",
			description : "2:56"},
			{name : "Hacker",
			description : "4:35"}]
	},
	noLove : {
		title : "No Love Deep Web",
		items : [
			{name : "Come Up and Get Me",
			description : "4:13"}, 
			{name : "Lil Boy",
			description : "3:46"}, 
			{name : "No Love",
			description : "5:04"}, 
			{name : "Black Dice",
			description : "3:27"},
			{name : "World of Dogs",
			description : "2:42"},
			{name : "Lock Your Doors",
			description : "3:52"},
			{name : "Whammy",
			description : "3:09"},
			{name : "Hunger Games",
			description : "2:39"},
			{name : "Deep Web",
			description : "2:18"},
			{name : "Stockton",
			description : "3:17"},
			{name : "Pop",
			description : "2:53"},
			{name : "Bass Rattle Stars Out the Sky",
			description : "2:27"},
			{name : "Artificial Death in the West",
			description : "5:58"}]
	},
		govPlates : {
		title : "Government Plates",
		items : [
			{name : "You Might Think He Loves You For Your Money But I Know What He Really Loves You For It's Your Brand New Leopard Skin Pillbox Hat",
			description : "2:41"}, 
			{name : "Anne Bonny",
			description : "3:27"}, 
			{name : "Two Heavens",
			description : "3:02"}, 
			{name : "This Is Violence Now",
			description : "2:38"},
			{name : "Birds",
			description : "4:38"},
			{name : "Feels Like a Wheel",
			description : "2:22"},
			{name : "I'm Overflow",
			description : "3:09"},
			{name : "Big House",
			description : "2:19"},
			{name : "Government Plates",
			description : "2:42"},
			{name : "Bootleg",
			description : "2:06"},
			{name : "Whatever I Want",
			description : "6:38"}]
	},
	powersB : {
		title : "The Powers That B",
		items : [
			{name : "Up My Sleeves",
			description : "5:17"}, 
			{name : "Billy Not Really",
			description : "3:49"}, 
			{name : "Black Quarterback",
			description : "2:59"}, 
			{name : "Say Hey Kid",
			description : "3:27"},
			{name : "Have a Sad Cum",
			description : "3:40"},
			{name : "F*** Me Out",
			description : "3:20"},
			{name : "Voila",
			description : "3:29"},
			{name : "Big Dipper",
			description : "5:28"}]
	}

};

var detail = function(info) {
	var albumDetail = Ti.UI.createWindow({
		backgroundColor: "#FEFBFB",
		title: info.title,
	});
	var rowDetail = Ti.UI.createLabel({
		text: info.descr
	});
	albumDetail.add(rowDetail);
	
	nav.openWindow(albumDetail);
};


var albumCollection = [];
for (n in albums) {
	
	var albumSection = Ti.UI.createTableViewSection({
		headerTitle: albums[n].title,
		
	});

	for (var i = 0; i < albums[n].items.length; i++) {

		var row = Ti.UI.createTableViewRow({
			title: albums[n].items[i].name,
			descr: albums[n].items[i].description,
		});
		row.addEventListener('click', function(e){
			detail(e.source);
		});
		albumSection.add(row);
	}
	albumCollection.push(albumSection);
}


var albumTable = Ti.UI.createTableView({
	separatorColor: "black",
	headerTitle: "Albums",
	top: 0,
});
albumTable.setData(albumCollection);



//device detection 
var osName = Ti.Platform.name;
if(osName === "iPhone OS"){
	albumTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	
}

exports.albumTable = albumTable;

