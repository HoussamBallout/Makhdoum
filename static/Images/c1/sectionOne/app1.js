var videoElement = document.getElementById('videoEle');
$( window ).resize(function() {
	setTimeout(function(){
	//var cHeight = document.getElementById('videoEle').offsetHeight;
	var body = document.body,
    html = document.documentElement;

var cHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
					 //  var cHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
		
	var cWidth = Math.max( body.scrollWidth, body.offsetWidth, 
                       html.clientWidth, html.scrollWidth, html.offsetWidth );
	console.log('width'+cWidth);
	console.log('height'+cHeight);
	cWidth=videoElement.offsetWidth;
	var cHeight=$(document).height();
	var xAxis=cWidth*0.85;
	var yAxis=cHeight*0.82;
	//var xAxis=856;
	//var yAxis=3284;
		$('#video-overlay').css('top',yAxis+'px');
			$('#video-overlay').css('left',xAxis+'px');
		$('#video-overlay').mouseover(function() {
			$('#video-overlay').css('opacity',0.5);
		});
		$('#video-overlay').mouseout(function() {
			$('#video-overlay').css('opacity',0);
		});
		},500);
	});
$(document).ready(function(){
	

	setTimeout(function(){
	/*var cHeight=videoElement.clientHeight;
	//var cHeight = document.getElementById('videoEle').offsetHeight;
	var body = document.body,
    html = document.documentElement;

var cHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
					 //  var cHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
		
	var cWidth = Math.max( body.scrollWidth, body.offsetWidth, 
                       html.clientWidth, html.scrollWidth, html.offsetWidth );
	console.log('width'+cWidth);
	console.log('height'+cHeight);
	var xAxis=cWidth*0.85;
	var yAxis=cHeight*0.82;
	var xAxis=1157;
	var yAxis=4432;*/
	cWidth=videoElement.offsetWidth;
	var cHeight=$(document).height();
	var xAxis=cWidth*0.85;
	var yAxis=cHeight*0.82;
	var height=$(window).height();
	//$('#video-overlay').css('width',cWidth*0.1+'px');
	//$('#video-overlay').css('height',height*0.3+'px');
		$('#video-overlay').css('top',yAxis+'px');
			$('#video-overlay').css('left',xAxis+'px');
		$('#video-overlay').mouseover(function() {
			$('#video-overlay').css('opacity',0.5);
		});
		$('#video-overlay').mouseout(function() {
			$('#video-overlay').css('opacity',0);
		});
	},500);
	$('#video-overlay').click(function(){
		showVideo('38rl7VA1oBA');
	});
});
handleClick = function(e) {

    console.log("Mouse-X: " + (e.clientX + window.pageXOffset));
    console.log("Mouse-Y: " + (e.clientY + window.pageYOffset));
	//const mediaQuery = window.matchMedia('(max-width: 767px) && (min-width: 569px)')
	//const mediaQuery = window.matchMedia('(max-width: 767px)')
	 
	
	var xAxis=e.clientX + window.pageXOffset;
		var yAxis=e.clientY + window.pageYOffset;
		var cHeight=videoElement.clientHeight;
		var cWidth=videoElement.clientWidth;
// Check if the media query is true
console.log('width'+cWidth);
console.log('height'+cHeight);
//if (mediaQuery.matches) {
  // Then trigger an alert
  ///alert('Media Query Matched!')
  var y=yAxis/cHeight;
  var x=xAxis/cWidth;
  console.log('y'+y);
console.log('x'+x);
  
		if((y >= 0.82 && y <= 0.86) && (x >= 0.84 && x <= 0.94)){
			console.log('RED WOMEN');
			showVideo('38rl7VA1oBA');
		}
/*}
	else{
	
		if((xAxis > 1310 && xAxis <1442) &&  (yAxis >4986 && yAxis < 5185)){
			console.log('RED WOMEN100');
			showVideo('Nfqx8atZdSE');
		}
	}*/
    
    e.preventDefault();
}


if(videoElement){
  videoElement.addEventListener('mousedown', handleClick, false);
 // videoElement.addEventListener('mouseover', mouseover, false);
    console.log('Houssam');
}
    else{
           console.log('Houssam11');
 
    }
	
function showVideo(youtubeID){

	var url = 'https://www.youtube.com/embed/' + youtubeID+'?controls=0'; 
	document.getElementById('videoIframe').src = url;
	// Get the modal
	var modal = document.getElementById('videoModal');
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	modal.style.display = "block"; 
	// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.getElementById('videoIframe').src = '';

}
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById('videoIframe').src = '';
    }
}
}
    
    
    
