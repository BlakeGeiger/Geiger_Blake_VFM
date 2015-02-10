var view1 = Ti.UI.createView({
	backgroundImage: "brule.jpg",
	height: 150,
	width: 200,
	top: 100
});

var view2 = Ti.UI.createView({
	backgroundImage: "ride.jpg",
	height: 150,
	width: 200,
	top: 260
});

var view3 = Ti.UI.createView({
	backgroundImage: "woodypaige.jpg",
	height: 150,
	width: 200,
	top: 420
});

view1.addEventListener('click', function(){
	alert("I've been clicked!");
	
});


view2.addEventListener('swipe', function(){
	alert("Congrats, you swiped!");
});


view3.addEventListener('dblclick', function(){
	alert("Great job, youre the best.");

});

exports.view1 = view1;
exports.view2 = view2;
exports.view3 = view3;


