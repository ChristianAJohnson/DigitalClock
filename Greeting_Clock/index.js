var fulltime = document.getElementsByClassName("fulltime")[0];
var color;

setInterval(function(){

	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	
	if(seconds < 10)
	{
		seconds = "0" + seconds;
	}

	if(minutes < 10)
	{
		minutes = "0" + minutes;
	}
	
	if(hours < 10)
	{
		hours = "0" + hours;
	}

	if(hours > 6 && hours < 11)
	{
		document.body.style.backgroundImage = "url('images/morning.jpeg')";

	} else if(hours > 12 && hours < 18)
	{
		document.body.style.backgroundImage = "url('images/afternoon.jpeg')";
	} else if(hours > 18 && hours < 24)
	{
		document.body.style.backgroundImage = "url('images/evening.jpg')";
	}


	fulltime.innerHTML = hours + ":" + minutes + ":" + seconds;

	// color = hours.toString() + minutes.toString() + seconds.toString(); 
	// document.body.style.backgroundColor = "#"+color;
	// console.log(color);

}, 1000); 


