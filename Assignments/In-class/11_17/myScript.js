// reference to random positioning
// https://dev.to/codepo8/fun-with-javascript-and-css-random-dots-2pfj

const theButton = document.getElementById("onlyButton");
let theBody = document.querySelector("body");
let thePara = document.querySelector("p");
let theHeading = document.querySelector("h1");

theButton.addEventListener('click', randomPos);
let counter = 1;

function randomPos(){

	const rand = (multi) => {
		return parseInt(multi * Math.random() ,10);
	}

	let ww = window.innerWidth;
	let wh = window.innerHeight;

	let constraint = Math.min(ww, wh);

	let w = rand(constraint);

	let xPos = rand(ww - w);
	let yPos = rand(wh - w);

	onlyButton.style.top = yPos + 'px';
	onlyButton.style.left = xPos + 'px';

	if(counter == 1){
		theBody.style.backgroundColor = "hsl(160, 50%, 59%)";
		thePara.textContent = "don't";
	}else if(counter == 2){
		theBody.style.backgroundColor = "hsl(160, 39%, 45%)";
		thePara.textContent = "please";
	}else if(counter == 3){
		theBody.style.backgroundColor = "hsl(160, 29%, 30%)";
		thePara.textContent = "why";
	}else if(counter == 4){
		theBody.style.backgroundColor = "hsl(160, 10%, 20%)";
		thePara.textContent = "quit it";
	}else if(counter == 5){
		theBody.style.backgroundColor = "hsl(160, 0%, 0%)";
		thePara.textContent = "stop";
	}else if(counter >= 10){
		theBody.style.backgroundImage = "url('https://i.pinimg.com/originals/8e/07/18/8e071836dc5d3f534138455fda54cc68.gif')";
		theBody.style.backgroundSize = "cover";
		theBody.style.backgroundRepeat = "no-repeat";
		// theBody.style.backgroundPosition = "center";
		onlyButton.style.display = "none";
		theHeading.style.visibility = "visible";

	}	
	counter++;
}