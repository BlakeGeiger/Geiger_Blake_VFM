var roster = require("array");
var getDetail = function(info) {
	var detail = Ti.UI.createWindow({
		backgroundColor : "#FBFBF4",
		title : info.title
	});
	var rowText = Ti.UI.createLabel({
		text : info.desc

	});
	detail.add(rowText);
	win1.openWindow(detail);
};

//Rows and Sections
var rosterTable = [];
for (var player in array.data) {

	var rosterSection = Ti.UI.createTableViewSection({
		headerTitle : array.data[player].title,
		
	});

	for (var i = 0; i < array.data[player].items.length; i++) {

		var row = Ti.UI.createTableViewRow({
			title : array.data[player].items[i].name,
			desc: array.data[player].items[i].desc,
			position: array.data[player].items[i].position,
		});
		
		rosterSection.add(row);
	}
	rosterSections.push(rosterSection);
}

tableView.setData(rosterSections);
tableView.addEventListener("click", function(e) {
	getDetail(e.source);
	// console.log(e.source.title, e.source.desc, e.source.position);
});