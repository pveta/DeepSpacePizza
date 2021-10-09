var timer = document.getElementById('timer');
var score = document.getElementById('score');
var asteroid = document.getElementById('asteroidButton');
var scoreNum;
var time;
var interval = false;

function start(){
	time = 0;
	scoreNum = 0;
	asteroid.style.left = Math.floor(Math.random()*90) +'%';
	asteroid.style.top = Math.floor(Math.random()*90) +'%';
	asteroid.style.display = 'block';
	if(interval==false){
		interval = setInterval(startTimer, 1000);
	}
	
}



function startTimer(){
		time+=1;
		timer.innerHTML="Time: " + time + "s";
		//scoreNum+=1;
		score.innerHTML = scoreNum;

		if(scoreNum>=25 && time<30){
			clearInterval(interval);
			interval = false;
			alert("Congratulations, you win! Use the code: xyz when checking out for a free large pizza and a tshirt!")
		}
}


function reset(){
	time = 0;
	scoreNum = 0;

	timer.innerHTML="Time: " + time + "s";
	score.innerHTML = scoreNum;
	asteroid.style.display = 'none';
	
	if(interval !== false){
		clearInterval(interval);
		interval = false;
	}
}

function destroyed(){
	scoreNum+=1;
	score.innerHTML = scoreNum;
	asteroid.style.left = Math.floor(Math.random()*90) +'%';
	asteroid.style.top = Math.floor(Math.random()*90) +'%';
}