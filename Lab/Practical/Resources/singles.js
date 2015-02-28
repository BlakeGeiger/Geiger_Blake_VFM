var winSingles = Titanium.UI.createWindow({  
    backgroundColor:'#fff',
    title: 'Singles',
    layout: 'vertical'
});

var startStopButton = Titanium.UI.createButton({
    title:'Play/Stop Leopard Skin Pillbox Hat',
    top:10,
    width:300,
    height:40
});

var pauseResumeButton = Titanium.UI.createButton({
    title:'Pause/Resume Leopard Skin Pillbox Hat',
    top:10,
    width:300,
    height:40,
    enabled:false
});

winSingles.add(startStopButton);
winSingles.add(pauseResumeButton);


var audioPlayer = Ti.Media.createAudioPlayer({ 
    url: 'audio/pillbox.mp3',
    allowBackground: true
});           
    
startStopButton.addEventListener('click',function() {

    if (audioPlayer.playing || audioPlayer.paused)
    {
        audioPlayer.stop();
        pauseResumeButton.enabled = false;
        if (Ti.Platform.name === 'android')
        { 
            audioPlayer.release();
        }   
    }
    else
    {
        audioPlayer.start();
        pauseResumeButton.enabled = true;
    }
});

pauseResumeButton.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.start();
    }
    else {
        audioPlayer.pause();
    }
});

audioPlayer.addEventListener('progress',function(e) {
    Ti.API.info('Time Played: ' + Math.round(e.progress) + ' milliseconds');
});

audioPlayer.addEventListener('change',function(e)
{
    Ti.API.info('State: ' + e.description + ' (' + e.state + ')');
});

winSingles.addEventListener('close',function() {
    audioPlayer.stop();
    if (Ti.Platform.osname === 'android')
    { 
        audioPlayer.release();
    }
});

var startStopButton2 = Titanium.UI.createButton({
    title:'Play/Stop Up My Sleeves',
    top:10,
    width:300,
    height:40
});

var pauseResumeButton2 = Titanium.UI.createButton({
    title:'Pause/Resume Up My Sleeves',
    top:10,
    width:300,
    height:40,
    enabled:false
});

winSingles.add(startStopButton2);
winSingles.add(pauseResumeButton2);


var audioPlayer2 = Ti.Media.createAudioPlayer({ 
    url: 'audio/sleeves.mp3',
    allowBackground: true
});           
    
startStopButton2.addEventListener('click',function() {

    if (audioPlayer2.playing || audioPlayer2.paused)
    {
        audioPlayer2.stop();
        pauseResumeButton2.enabled = false;
        if (Ti.Platform.name === 'android')
        { 
            audioPlayer2.release();
        }   
    }
    else
    {
        audioPlayer2.start();
        pauseResumeButton2.enabled = true;
    }
});

pauseResumeButton2.addEventListener('click', function() {
    if (audioPlayer2.paused) {
        audioPlayer2.start();
    }
    else {
        audioPlayer2.pause();
    }
});

audioPlayer2.addEventListener('progress',function(e) {
    Ti.API.info('Time Played: ' + Math.round(e.progress) + ' milliseconds');
});

audioPlayer2.addEventListener('change',function(e)
{
    Ti.API.info('State: ' + e.description + ' (' + e.state + ')');
});

winSingles.addEventListener('close',function() {
    audioPlayer2.stop();
    if (Ti.Platform.osname === 'android')
    { 
        audioPlayer2.release();
    }
});

var startStopButton3 = Titanium.UI.createButton({
    title:'Play/Stop Come Up and Get Me',
    top:10,
    width:300,
    height:40
});

var pauseResumeButton3 = Titanium.UI.createButton({
    title:'Pause/Resume Come Up and Get Me',
    top:10,
    width:300,
    height:40,
    enabled:false
});

winSingles.add(startStopButton3);
winSingles.add(pauseResumeButton3);


var audioPlayer3 = Ti.Media.createAudioPlayer({ 
    url: 'audio/comeUp.mp3',
    allowBackground: true
});           
    
startStopButton3.addEventListener('click',function() {

    if (audioPlayer3.playing || audioPlayer3.paused)
    {
        audioPlayer3.stop();
        pauseResumeButton3.enabled = false;
        if (Ti.Platform.name === 'android')
        { 
            audioPlayer3.release();
        }   
    }
    else
    {
        audioPlayer3.start();
        pauseResumeButton3.enabled = true;
    }
});

pauseResumeButton3.addEventListener('click', function() {
    if (audioPlayer3.paused) {
        audioPlayer3.start();
    }
    else {
        audioPlayer3.pause();
    }
});

audioPlayer3.addEventListener('progress',function(e) {
    Ti.API.info('Time Played: ' + Math.round(e.progress) + ' milliseconds');
});

audioPlayer3.addEventListener('change',function(e)
{
    Ti.API.info('State: ' + e.description + ' (' + e.state + ')');
});

winSingles.addEventListener('close',function() {
    audioPlayer3.stop();
    if (Ti.Platform.osname === 'android')
    { 
        audioPlayer3.release();
    }
});

var startStopButton4 = Titanium.UI.createButton({
    title:'Play/Stop Guillotine',
    top:10,
    width:300,
    height:40
});

var pauseResumeButton4 = Titanium.UI.createButton({
    title:'Pause/Resume Guillotine',
    top:10,
    width:300,
    height:40,
    enabled:false
});

winSingles.add(startStopButton4);
winSingles.add(pauseResumeButton4);


var audioPlayer4 = Ti.Media.createAudioPlayer({ 
    url: 'audio/guillotine.mp3',
    allowBackground: true
});           
    
startStopButton4.addEventListener('click',function() {

    if (audioPlayer4.playing || audioPlayer4.paused)
    {
        audioPlayer4.stop();
        pauseResumeButton4.enabled = false;
        if (Ti.Platform.name === 'android')
        { 
            audioPlayer4.release();
        }   
    }
    else
    {
        audioPlayer4.start();
        pauseResumeButton4.enabled = true;
    }
});

pauseResumeButton4.addEventListener('click', function() {
    if (audioPlayer4.paused) {
        audioPlayer4.start();
    }
    else {
        audioPlayer4.pause();
    }
});

audioPlayer4.addEventListener('progress',function(e) {
    Ti.API.info('Time Played: ' + Math.round(e.progress) + ' milliseconds');
});

audioPlayer4.addEventListener('change',function(e)
{
    Ti.API.info('State: ' + e.description + ' (' + e.state + ')');
});

winSingles.addEventListener('close',function() {
    audioPlayer4.stop();
    if (Ti.Platform.osname === 'android')
    { 
        audioPlayer4.release();
    }
});

var startStopButton5 = Titanium.UI.createButton({
    title:'Play/Stop Ive Seen Footage',
    top:10,
    width:300,
    height:40
});

var pauseResumeButton5 = Titanium.UI.createButton({
    title:'Pause/Resume Ive Seen Footage',
    top:10,
    width:300,
    height:40,
    enabled:false
});

winSingles.add(startStopButton5);
winSingles.add(pauseResumeButton5);


var audioPlayer5 = Ti.Media.createAudioPlayer({ 
    url: 'audio/footage.mp3',
    allowBackground: true
});           
    
startStopButton5.addEventListener('click',function() {

    if (audioPlayer5.playing || audioPlayer5.paused)
    {
        audioPlayer5.stop();
        pauseResumeButton5.enabled = false;
        if (Ti.Platform.name === 'android')
        { 
            audioPlayer5.release();
        }   
    }
    else
    {
        audioPlayer5.start();
        pauseResumeButton5.enabled = true;
    }
});

pauseResumeButton5.addEventListener('click', function() {
    if (audioPlayer5.paused) {
        audioPlayer5.start();
    }
    else {
        audioPlayer5.pause();
    }
});

audioPlayer5.addEventListener('progress',function(e) {
    Ti.API.info('Time Played: ' + Math.round(e.progress) + ' milliseconds');
});

audioPlayer5.addEventListener('change',function(e)
{
    Ti.API.info('State: ' + e.description + ' (' + e.state + ')');
});

winSingles.addEventListener('close',function() {
    audioPlayer5.stop();
    if (Ti.Platform.osname === 'android')
    { 
        audioPlayer5.release();
    }
});



exports.winSingles = winSingles;
