var slideIndex = 1;

var i;
var slides = document.getElementsByClassName("slide");
var numberText = document.getElementById('numberText');
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');

slides[0].style.display = "block";

for(i=1;i<slides.length;i++){
		slides[i].style.display = "none";
}

var interval = false;

function plusSlides(n){
	for(i=0;i<slides.length;i++){
		slides[i].style.display = "none";
	}

	slideIndex+=n;

	if(slideIndex > slides.length){
		slideIndex = 1;
	}

	if(slideIndex<1){
		slideIndex = 1;
	}

	slides[slideIndex-1].style.display = "block";
	numberText.innerHTML = slideIndex+" / "+slides.length;


	//setTimeout(plusSlides(1), 5000);   //maybe just have plusSlides and it calls itself 
}


function showSlides(){
	var i;
	var slides = document.getElementsByClassName("slide");

	for(i=0;i<slides.length;i++){
		slides[i].style.display = "none";
	}

	slideIndex++;

	if(slideIndex > slides.length){
		slideIndex = 1;
	}

	slides[slideIndex-1].style.display = "block";
	numberText.innerHTML = slideIndex+" / "+slides.length;


	//setTimeout(showSlides, 5000); 
}


function startSlideshow(){
	interval = setInterval(showSlides, 5000);
	startButton.style.backgroundColor = "#006400";
	stopButton.style.backgroundColor = "red";
}

function stopSlideshow(){
	if(interval !== false){
		clearInterval(interval);
		startButton.style.backgroundColor = "#32CD32";
		stopButton.style.backgroundColor = "#800000";
	}
}