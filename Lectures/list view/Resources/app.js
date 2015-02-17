var win = Ti.UI.createWindow({
	backgroundColor: "#2a707e"
});

var win2 = Ti.UI.createWindow({
	backgroundColor: "orange"
});

var list = Ti.UI.createListView({
	backgroundColor: "#f9f0ec",
	top:20,
});
var listSection = [];

var produce = Ti.UI.createListSection({
	headerTitle: "Produce",
});
var dairy = Ti.UI.createListSection({
	headerTitle: "Dairy",
});
var cannedGoods = Ti.UI.createListSection({
	headerTitle: "Canned Goods",
});

produceData = [
	{properties: {title: "celery", image: "celery.jpg", accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
	{properties:{title:"carrots", image: "carrort.jpg", accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
	{properties:{title:"apple", image: "apple.jpeg", accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
	{properties:{title:"grapes", image: "grapes.jpg", accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
	{properties:{title:"banana", image: "banana.jpg", accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},

];
produce.setItems(produceData);


dairyData = [
	{properties: {title: "milk", image: "milk.jpg", accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
	{properties:{title:"cheese", image: "cheese.jpg", accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
	{properties:{title:"yogurt", image: "yogurt.jpg", accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
	{properties:{title:"cottage cheese", image: "cott.jpg", accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
	{properties:{title:"creme cheese", image: "cream.jpg", accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
];
dairy.setItems(dairyData);

cannedGoodsData = [
	{properties: {title: "peas", image: "peas.png", accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
	{properties:{title:"ravioli", image: "rav.jpg", accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
	{properties:{title:"soup", image: "soup.jpg", accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
	{properties:{title:"tuna", image: "tuna.jpg", accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
	{properties:{title:"fruit cocktail", image: "fruit.png", accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}},
];
cannedGoods.setItems(cannedGoodsData);

listSection.push(produce, dairy, cannedGoods);
list.sections = listSection;
win.add(list);
win.open();
