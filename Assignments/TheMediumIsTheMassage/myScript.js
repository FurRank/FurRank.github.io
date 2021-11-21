const theGif1 = document.getElementById("gif1");
const theGif2_1 = document.getElementById("gif2_1");
// const theGif2_2 = document.getElementById("gif2_2");
const theGif3 = document.getElementById("gif3");
const theGif4 = document.getElementById("gif4");
const theGif5 = document.getElementById("gif5");

const theButtonChannel = document.getElementById("next");
const theButtonPower = document.getElementById("on-off");

let theHeading = document.querySelector("h1");
let theHeadingOff = document.querySelector("h2");

theButtonChannel.addEventListener('click', channels);
theButtonPower.addEventListener('click', power);
counter = 1;
powerButton = 0;

// function channels(){
// 	theHeading.style.visibility = "hidden";
// 	if (counter == 1){
// 		theGif5.style.display = "none";
// 		counter++;
// 	}else if(counter == 2){
// 		theGif2_1.style.display = "block";
// 		theGif2_2.style.display = "block";
// 		counter++;
// 	}else if(counter == 3){
// 		theGif2_1.style.display = "none";
// 		counter++;

// 	}else if(counter == 4){
// 		counter++;
// 	}else if(counter == 5){
// 		theGif5.style.display = "block";
// 		counter = 1;
// 	}
// }
function channels(){
	if(powerButton == 1){
		theHeading.style.visibility = "hidden";
		theHeadingOff.style.visibility = "hidden";
		if (counter == 1){
			theGif5.style.display = "none";
			theGif1.style.display = "initial";
			counter++;
		}else if(counter == 2){
			theGif1.style.display = "none";
			theGif2_1.style.display = "initial";
			// theGif2_2.style.display = "block";
			counter++;
		}else if(counter == 3){
			theGif2_1.style.display = "none";
			// theGif2_2.style.display = "none";
			theGif3.style.display = "initial";
			counter++;
		}else if(counter == 4){
			theGif3.style.display = "none";
			theGif4.style.display = "initial";
			counter++;
		}else if(counter == 5){
			theGif4.style.display = "none";
			theGif5.style.display = "initial";
			counter = 1;
		}
	}
}

function power(){
	if(powerButton == 1){
		theHeadingOff.style.visibility = "visible";
		theHeading.style.visibility = "hidden";
		theGif1.style.display = "none";
		theGif2_1.style.display = "none";
		// theGif2_2.style.display = "none";
		// theGif2_3.style.display = "none";
		// theGif2_4.style.display = "none";
		theGif3.style.display = "none";
		theGif4.style.display = "none";
		theGif5.style.display = "none";
		powerButton--;
	}else if(powerButton == 0){
		theHeadingOff.style.visibility = "hidden";
		theHeading.style.visibility = "visible";
		powerButton++;
	}
}