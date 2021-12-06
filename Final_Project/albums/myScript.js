var audio = document.getElementById("myaudio");
audio.volume = 0.5;


const current = document.getElementById("item1");
const song = current.getAttribute("data-panelid");

// let pColor1 = document.querySelector("p");
let pColor = document.querySelectorAll('p');

// let curBody = document.querySelector("body");

// console.log("data-panelid");

// const song = current.getAttribute('data-panelid');

document.addEventListener("DOMContentLoaded", backgroundChange())

function backgroundChange(){

	if(song == "Song1"){
        document.body.style.backgroundColor = "#7f53ac";
        document.body.style.background = "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)";
	}else if(song == "Song2"){
		document.body.style.backgroundColor = "#bdd4e7";
		document.body.style.background = "linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%) fixed";
	}else if(song == "Song3"){
        document.body.style.backgroundColor = "#f9ff60";
        document.body.style.background = "linear-gradient(315deg, #f9ff60 0%, #ffef77 74%)";
        pColor[0].style.color = "black";
        pColor[1].style.color = "black";
        // pColor2.style.color = "red";
        // pColor3.style.color = "red";
	}else if(song == "Song4"){
        document.body.style.backgroundColor = "#000000";
        document.body.style.background = "linear-gradient(315deg, #000000 0%, #b82e1f 74%)";
	}else if(song == "Song5"){
        document.body.style.backgroundColor = "#aff6cf";
        document.body.style.background = "linear-gradient(315deg, #aff6cf 0%, #9f98e8 74%)";
        pColor[0].style.color = "black";
        pColor[1].style.color = "black";
	}else if(song == "Song6"){
        document.body.style.backgroundColor = "#90d5ec";
        document.body.style.background = "linear-gradient(315deg, #90d5ec 0%, #fc575e 74%)";
        pColor[0].style.color = "black";
        pColor[1].style.color = "black";
	}else if(song == "Song7"){
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.background = "linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)";
        pColor[0].style.color = "black";
        pColor[1].style.color = "black";
	}else if(song == "Song8"){
        document.body.style.backgroundColor = "#9dc5c3";
        document.body.style.background = "linear-gradient(315deg, #9dc5c3 0%, #5e5c5c 74%)";
        pColor[0].style.color = "black";
        pColor[1].style.color = "black";
	}else if(song == "Song9"){
        document.body.style.backgroundColor = "#2d3436";
        document.body.style.background = "linear-gradient(315deg, #2d3436 0%, #000000 74%)";
	}else if(song == "Song10"){
        document.body.style.backgroundColor = "##fff293";
        document.body.style.background = "linear-gradient(315deg, #fff293 0%, #ffe884 74%)";
        pColor[0].style.color = "black";
        pColor[1].style.color = "black";
	}
	
}