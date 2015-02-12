var home = Titanium.UI.createWindow({
    backgroundColor: 'black',
    title: 'Rosters'
});

var win1 = Titanium.UI.iOS.createNavigationWindow({
   window: home
});

var table = Titanium.UI.createWindow({
    backgroundColor: 'white',
    title: 'Table View'
});

var tableButton = Titanium.UI.createButton({
    title: 'Table View'
});
tableButton.addEventListener('click', function(){
    win1.openWindow(table, {animated:true});
});

home.add(tableButton);
var closeTableButton = Titanium.UI.createButton({
    title: 'Close Table View'
});
closeTableButton.addEventListener('click', function(){
    win1.closeWindow(table, {animated:false}); //win3.close() will also work!!
});

table.add(closeTableButton);
win1.open();