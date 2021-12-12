var counter = 1;
// const getAudio = document.getElementById("audio")
// const getAudio2 = document.getElementById("audio")

// var menuAudio = document.getElementById("audio");
// const song = menuAudio.getAttribute("audio-panelid");


// function play(y){
//     audio[y].play();
//     console.log(y)
// }


// Starting over the song and pausing
// https://stackoverflow.com/questions/13002935/html5-audio-start-over

// Audio tag
// https://stackoverflow.com/questions/33747398/html-audio-tag-volume
const getAlbum1 = document.getElementById("album1");
const getAlbum2 = document.getElementById("album2");
const getAlbum3 = document.getElementById("album3");
const getAlbum4 = document.getElementById("album4");
const getAlbum5 = document.getElementById("album5");
const getAlbum6 = document.getElementById("album6");
const getAlbum7 = document.getElementById("album7");
const getAlbum8 = document.getElementById("album8");
const getAlbum9 = document.getElementById("album9");
const getAlbum10 = document.getElementById("album10");

audio[10].volume = 0.05;

// #(function(){
//     jQuery("")
// })

// audio[10].play();
toggleC = 1;

// $('.toggleB').on('click', function(){
//     // var buttonId = $(this).attr('data-panelid')
//     if(toggleC == 1){
//         audio[10].pause();
//         toggleC--;
//     }else if(toggleC == 0){
//         audio[10].play();
//         toggleC++;
//     }
// })

$('.button-panel').on('click', function(){
    var buttonId = $(this).attr('data-panelid')
    if(buttonId == "on-click1"){ // Previous
        audio[counter-1].pause();
        audio[10].volume = 0.05;
        if(toggleC == 0){
            audio[10].pause();
        }else if(toggleC == 1){
            audio[10].play();
        }
        if(counter != 1){
            counter--;
        }
        if(counter == 1){
            $.fn.displayAlbum1(); 
            console.log(counter)
        }else if(counter == 2){
            $.fn.displayAlbum2();
            console.log(counter)
        }else if(counter == 3){
            $.fn.displayAlbum3();
            console.log(counter)
        }else if(counter == 4){
            $.fn.displayAlbum4();
            console.log(counter)
        }else if(counter == 5){
            $.fn.displayAlbum5();
            console.log(counter)
        }else if(counter == 6){
            $.fn.displayAlbum6();
            console.log(counter)
        }else if(counter == 7){
            $.fn.displayAlbum7();
            console.log(counter)
        }else if(counter == 8){
            $.fn.displayAlbum8();
            console.log(counter)
        }else if(counter == 9){
            $.fn.displayAlbum9();
            console.log(counter)
        }
        changeBGC();
    }else if(buttonId == 'on-click2'){ //Preview
        // if(counter == 1){
        console.log(counter);
        playCurrentSong(counter);
        audio[10].pause();
        // audio[10].volume = 0.3;
        // if(toggleC == 0){
        //     audio[10].pause();
        // }else if(toggleC == 1){
        //     audio[10].play();
        // }

        // }
    }else if(buttonId == 'on-click3'){ //Pause
        audio[counter-1].pause();
        if(toggleC == 0){
            audio[10].pause();
        }else if(toggleC == 1){
            audio[10].play();
        }
        audio[10].volume = 0.05;

    }else if(buttonId == 'on-click4'){ // Next
        audio[counter-1].pause();
        if(toggleC == 0){
            audio[10].pause();
        }else if(toggleC == 1){
            audio[10].play();
        }
        audio[10].volume = 0.05;
        // audio[10].play();
        if(counter != 10){
            counter++;
        }
        if(counter == 1){
            $.fn.displayAlbum1();  
            console.log(counter)
        }else if(counter == 2){
            // moveRight1();
            $.fn.displayAlbum2();
            console.log(counter)
        }else if(counter == 3){
            $.fn.displayAlbum3();
            console.log(counter)
        }else if(counter == 4){
            $.fn.displayAlbum4();
            console.log(counter)
        }else if(counter == 5){
            $.fn.displayAlbum5();
            console.log(counter)
        }else if(counter == 6){
            $.fn.displayAlbum6();
            console.log(counter)
        }else if(counter == 7){
            $.fn.displayAlbum7();
            console.log(counter)
        }else if(counter == 8){
            $.fn.displayAlbum8();
            console.log(counter)
        }else if(counter == 9){
            $.fn.displayAlbum9();
            console.log(counter)
        }else if(counter == 10){
            $.fn.displayAlbum10();
            console.log(counter)
        }
        changeBGC();
    }else if(buttonId == 'on-click5'){
        pauseCurrentSong(counter)
        if(toggleC == 1){
            audio[10].pause();
            toggleC--;
        }else if(toggleC == 0){
            audio[10].play();
            toggleC++;
        }
        console.log(toggleC)
    }
});

function changeBGC(){
    // console.log("yo");
    if(getAlbum1.style.display == "initial"){
        document.body.style.backgroundColor = "#7f53ac";
        document.body.style.background = "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)";
    }else if(getAlbum2.style.display == "initial"){
        document.body.style.backgroundColor = "#bdd4e7";
        document.body.style.background = "linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)";
    }else if(getAlbum3.style.display == "initial"){
        document.body.style.backgroundColor = "#f9ff60";
        document.body.style.background = "linear-gradient(315deg, #f9ff60 0%, #ffef77 74%)";
    }else if(getAlbum4.style.display == "initial"){
        document.body.style.backgroundColor = "#000000";
        document.body.style.background = "linear-gradient(315deg, #000000 0%, #b82e1f 74%)";
    }else if(getAlbum5.style.display == "initial"){
        document.body.style.backgroundColor = "#aff6cf";
        document.body.style.background = "linear-gradient(315deg, #aff6cf 0%, #9f98e8 74%)";
    }else if(getAlbum6.style.display == "initial"){
        document.body.style.backgroundColor = "#90d5ec";
        document.body.style.background = "linear-gradient(315deg, #90d5ec 0%, #fc575e 74%)";
    }else if(getAlbum7.style.display == "initial"){
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.background = "linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)";
    }else if(getAlbum8.style.display == "initial"){
        document.body.style.backgroundColor = "#9dc5c3";
        document.body.style.background = "linear-gradient(315deg, #9dc5c3 0%, #5e5c5c 74%)";
    }else if(getAlbum9.style.display == "initial"){
        document.body.style.backgroundColor = "#2d3436";
        document.body.style.background = "linear-gradient(315deg, #2d3436 0%, #000000 74%)";
    }else if(getAlbum10.style.display == "initial"){
        document.body.style.backgroundColor = "##fff293";
        document.body.style.background = "linear-gradient(315deg, #fff293 0%, #ffe884 74%)";
    }

}

function playCurrentSong(x){
    // const audio = getAudio.getElementById("data-panelid");
    // if(audio == getAudio1){
        // if(audio[] == "audio1"){

        // }
    // }
    // audio.play();
    for(var i = 0; i < 10; i++){
        audio[i].volume = 0.5;
    }
    audio[10].volume = 0.05;
    if(x == 1){
        audio[0].play();
        audio[1].currentTime = 0;
        audio[1].pause();
        audio[2].currentTime = 0;
        audio[2].pause();
        audio[3].currentTime = 0;
        audio[3].pause();
        audio[4].currentTime = 0;
        audio[4].pause();
        audio[5].currentTime = 0;
        audio[5].pause();
        audio[6].currentTime = 0;
        audio[6].pause();
        audio[7].currentTime = 0;
        audio[7].pause();
        audio[8].currentTime = 0;
        audio[8].pause();
        audio[9].currentTime = 0;
        audio[9].pause();
    }else if(x == 2){
        audio[0].currentTime = 0;
        audio[0].pause();
        audio[1].play();
        audio[2].currentTime = 0;
        audio[2].pause();
        audio[3].currentTime = 0;
        audio[3].pause();
        audio[4].currentTime = 0;
        audio[4].pause();
        audio[5].currentTime = 0;
        audio[5].pause();
        audio[6].currentTime = 0;
        audio[6].pause();
        audio[7].currentTime = 0;
        audio[7].pause();
        audio[8].currentTime = 0;
        audio[8].pause();
        audio[9].currentTime = 0;
        audio[9].pause();
    }else if(x == 3){
        audio[0].currentTime = 0;
        audio[0].pause();
        audio[1].currentTime = 0;
        audio[1].pause();
        audio[2].play();
        audio[3].currentTime = 0;
        audio[3].pause();
        audio[4].currentTime = 0;
        audio[4].pause();
        audio[5].currentTime = 0;
        audio[5].pause();
        audio[6].currentTime = 0;
        audio[6].pause();
        audio[7].currentTime = 0;
        audio[7].pause();
        audio[8].currentTime = 0;
        audio[8].pause();
        audio[9].currentTime = 0;
        audio[9].pause();
    }else if(x == 4){
        audio[0].currentTime = 0;
        audio[0].pause();
        audio[1].currentTime = 0;
        audio[1].pause();
        audio[2].currentTime = 0;
        audio[2].pause();
        audio[3].play();
        audio[4].currentTime = 0;
        audio[4].pause();
        audio[5].currentTime = 0;
        audio[5].pause();
        audio[6].currentTime = 0;
        audio[6].pause();
        audio[7].currentTime = 0;
        audio[7].pause();
        audio[8].currentTime = 0;
        audio[8].pause();
        audio[9].currentTime = 0;
        audio[9].pause();
    }else if(x == 5){
        audio[0].currentTime = 0;
        audio[0].pause();
        audio[1].currentTime = 0;
        audio[1].pause();
        audio[2].currentTime = 0;
        audio[2].pause();
        audio[3].currentTime = 0;
        audio[3].pause();
        audio[4].play();
        audio[5].currentTime = 0;
        audio[5].pause();
        audio[6].currentTime = 0;
        audio[6].pause();
        audio[7].currentTime = 0;
        audio[7].pause();
        audio[8].currentTime = 0;
        audio[8].pause();
        audio[9].currentTime = 0;
        audio[9].pause();
    }else if(x == 6){
        audio[0].currentTime = 0;
        audio[0].pause();
        audio[1].currentTime = 0;
        audio[1].pause();
        audio[2].currentTime = 0;
        audio[2].pause();
        audio[3].currentTime = 0;
        audio[3].pause();
        audio[4].currentTime = 0;
        audio[4].pause();
        audio[5].play();
        audio[6].currentTime = 0;
        audio[6].pause();
        audio[7].currentTime = 0;
        audio[7].pause();
        audio[8].currentTime = 0;
        audio[8].pause();
        audio[9].currentTime = 0;
        audio[9].pause();
    }else if(x == 7){
        audio[0].currentTime = 0;
        audio[0].pause();
        audio[1].currentTime = 0;
        audio[1].pause();
        audio[2].currentTime = 0;
        audio[2].pause();
        audio[3].currentTime = 0;
        audio[3].pause();
        audio[4].currentTime = 0;
        audio[4].pause();
        audio[5].currentTime = 0;
        audio[5].pause();
        audio[6].play();
        audio[7].currentTime = 0;
        audio[7].pause();
        audio[8].currentTime = 0;
        audio[8].pause();
        audio[9].currentTime = 0;
        audio[9].pause();
    }else if(x == 8){
        audio[0].currentTime = 0;
        audio[0].pause();
        audio[1].currentTime = 0;
        audio[1].pause();
        audio[2].currentTime = 0;
        audio[2].pause();
        audio[3].currentTime = 0;
        audio[3].pause();
        audio[4].currentTime = 0;
        audio[4].pause();
        audio[5].currentTime = 0;
        audio[5].pause();
        audio[6].currentTime = 0;
        audio[6].pause();
        audio[7].play();
        audio[8].currentTime = 0;
        audio[8].pause();
        audio[9].currentTime = 0;
        audio[9].pause();
    }else if(x == 9){
        audio[0].currentTime = 0;
        audio[0].pause();
        audio[1].currentTime = 0;
        audio[1].pause();
        audio[2].currentTime = 0;
        audio[2].pause();
        audio[3].currentTime = 0;
        audio[3].pause();
        audio[4].currentTime = 0;
        audio[4].pause();
        audio[5].currentTime = 0;
        audio[5].pause();
        audio[6].currentTime = 0;
        audio[6].pause();
        audio[7].currentTime = 0;
        audio[7].pause();
        audio[8].play();
        audio[9].currentTime = 0;
        audio[9].pause();
    }else if(x == 10){
        audio[0].currentTime = 0;
        audio[0].pause();
        audio[1].currentTime = 0;
        audio[1].pause();
        audio[2].currentTime = 0;
        audio[2].pause();
        audio[3].currentTime = 0;
        audio[3].pause();
        audio[4].currentTime = 0;
        audio[4].pause();
        audio[5].currentTime = 0;
        audio[5].pause();
        audio[6].currentTime = 0;
        audio[6].pause();
        audio[7].currentTime = 0;
        audio[7].pause();
        audio[8].currentTime = 0;
        audio[8].pause();
        audio[9].play();
    }
}

function pauseCurrentSong(x){
        audio[0].pause();
        audio[1].pause();
        audio[2].pause();
        audio[3].pause();
        audio[4].pause();
        audio[5].pause();
        audio[6].pause();
        audio[7].pause();
        audio[8].pause();
        audio[9].pause();
}

$(function(){
    $.fn.displayAlbum1 = function(){
        $('#album1').css({
            display:"initial"
        });
        $('#album2').css({
            display:"none"
        });
        $('#album3').css({
            display:"none"
        })
        $('#album4').css({
            display:"none"
        })
        $('#album5').css({
            display:"none"
        })
        $('#album6').css({
            display:"none"
        })
        $('#album7').css({
            display:"none"
        })
        $('#album8').css({
            display:"none"
        })
        $('#album9').css({
            display:"none"
        })
        $('#album10').css({
            display:"none"
        })
        $('#img1').css({
            display:"none"
        });
        $('#img2').css({
            display:"none"
        });  
    }
    $.fn.displayAlbum2 = function(){
        $('#album1').css({
            display:"none"
        });
        $('#album2').css({
            display:"initial"
        });
        $('#album3').css({
            display:"none"
        })
        $('#album4').css({
            display:"none"
        })
        $('#album5').css({
            display:"none"
        })
        $('#album6').css({
            display:"none"
        })
        $('#album7').css({
            display:"none"
        })
        $('#album8').css({
            display:"none"
        })
        $('#album9').css({
            display:"none"
        })
        $('#album10').css({
            display:"none"
        })
    }
    $.fn.displayAlbum3 = function(){
        $('#album1').css({
            display:"none"
        });
        $('#album2').css({
            display:"none"
        });
        $('#album3').css({
            display:"initial"
        })
        $('#album4').css({
            display:"none"
        })
        $('#album5').css({
            display:"none"
        })
        $('#album6').css({
            display:"none"
        })
        $('#album7').css({
            display:"none"
        })
        $('#album8').css({
            display:"none"
        })
        $('#album9').css({
            display:"none"
        })
        $('#album10').css({
            display:"none"
        })
    }
    $.fn.displayAlbum4 = function(){
        $('#album1').css({
            display:"none"
        });
        $('#album2').css({
            display:"none"
        });
        $('#album3').css({
            display:"none"
        })
        $('#album4').css({
            display:"initial"
        })
        $('#album5').css({
            display:"none"
        })
        $('#album6').css({
            display:"none"
        })
        $('#album7').css({
            display:"none"
        })
        $('#album8').css({
            display:"none"
        })
        $('#album9').css({
            display:"none"
        })
        $('#album10').css({
            display:"none"
        })
    }
    $.fn.displayAlbum5 = function(){
        $('#album1').css({
            display:"none"
        });
        $('#album2').css({
            display:"none"
        });
        $('#album3').css({
            display:"none"
        })
        $('#album4').css({
            display:"none"
        })
        $('#album5').css({
            display:"initial"
        })
        $('#album6').css({
            display:"none"
        })
        $('#album7').css({
            display:"none"
        })
        $('#album8').css({
            display:"none"
        })
        $('#album9').css({
            display:"none"
        })
        $('#album10').css({
            display:"none"
        })
    }
    $.fn.displayAlbum6 = function(){
        $('#album1').css({
            display:"none"
        });
        $('#album2').css({
            display:"none"
        });
        $('#album3').css({
            display:"none"
        })
        $('#album4').css({
            display:"none"
        })
        $('#album5').css({
            display:"none"
        })
        $('#album6').css({
            display:"initial"
        })
        $('#album7').css({
            display:"none"
        })
        $('#album8').css({
            display:"none"
        })
        $('#album9').css({
            display:"none"
        })
        $('#album10').css({
            display:"none"
        })
    }
    $.fn.displayAlbum7 = function(){
        $('#album1').css({
            display:"none"
        });
        $('#album2').css({
            display:"none"
        });
        $('#album3').css({
            display:"none"
        })
        $('#album4').css({
            display:"none"
        })
        $('#album5').css({
            display:"none"
        })
        $('#album6').css({
            display:"none"
        })
        $('#album7').css({
            display:"initial"
        })
        $('#album8').css({
            display:"none"
        })
        $('#album9').css({
            display:"none"
        }) 
        $('#album10').css({
            display:"none"
        })
    }
    $.fn.displayAlbum8 = function(){
        $('#album1').css({
            display:"none"
        });
        $('#album2').css({
            display:"none"
        });
        $('#album3').css({
            display:"none"
        })
        $('#album4').css({
            display:"none"
        })
        $('#album5').css({
            display:"none"
        })
        $('#album6').css({
            display:"none"
        })
        $('#album7').css({
            display:"none"
        })
        $('#album8').css({
            display:"initial"
        })
        $('#album9').css({
            display:"none"
        })
        $('#album10').css({
            display:"none"
        })
    }
    $.fn.displayAlbum9 = function(){
        $('#album1').css({
            display:"none"
        });
        $('#album2').css({
            display:"none"
        });
        $('#album3').css({
            display:"none"
        })
        $('#album4').css({
            display:"none"
        })
        $('#album5').css({
            display:"none"
        })
        $('#album6').css({
            display:"none"
        })
        $('#album7').css({
            display:"none"
        })
        $('#album8').css({
            display:"none"
        })
        $('#album9').css({
            display:"initial"
        })
        $('#album10').css({
            display:"none"
        })
    }
    $.fn.displayAlbum10 = function(){
        $('#album1').css({
            display:"none"
        });
        $('#album2').css({
            display:"none"
        });
        $('#album3').css({
            display:"none"
        })
        $('#album4').css({
            display:"none"
        })
        $('#album5').css({
            display:"none"
        })
        $('#album6').css({
            display:"none"
        })
        $('#album7').css({
            display:"none"
        })
        $('#album8').css({
            display:"none"
        })
        $('#album9').css({
            display:"none"
        })
        $('#album10').css({
            display:"initial"
        })
    }

})


// $('.oy').hover(functionhover
// 	var slideId = $(this).attr('slide-panelid')
// 	if(slideId == 'slide'){
// 		// $(buttonId).css({visibility:'none'});
// 		// hideButton();
// 		// $('body').css({background:'blue'});
// 		// $('.oy').slideUp(1000);	
// 		$('.oy').animate({width:'toggle'},1000);
// 	}
// 	$('oy').stop();
// 		// $('.hover-button').show(5000);
// });

// $(function(){
// 	$('.oy').click(
// 		function(){
// 			$('oy').stop(true, true).slideDown('medium');
// 		},
// 		function(){
// 			$('oy').stop(true, true).slideUp('medium');
// 		}
// 	);
// });

// $(function(){
// 	// $('.button-panel').on('click', function() {
// 	$('oy').on('hover', function(){
// 		$(this).addClass('active');
// 	}, function(){
// 		$(this).removeClass('active');
// 	});
// })

// Hovering and animating
// https://www.tutorialrepublic.com/faq/how-to-animate-div-width-on-mouse-hover-using-jquery.php

// $(function(){
// 	var imageWidth = $(".oy").width();
//     $(".oy").mouseenter(function(){
//         $(this).animate({
//             width: "250",
//             height: "200"
//         });
//     }).mouseleave(function(){
//         $(this).animate({
//             width: imageWidth
//         });
//     });
// })


// $(function(){
//  var imageHeight = $(".oy").height();
//     $(".oy").click(function(){
//         // $(this).slideUp(1000)
//         $(this).animate({
//             height:200
//         });
//     // }).click(function(){
//     //     // $(this).slideDown(1000)
//     //     $(this).animate({
//     //         height: imageHeight
//     //     });
//     });
// })

// var prevId;

// $('.oy').on('click', function() {
//     var slideId = $(this).attr('slide-panelid');
//     if(slideId == "ost1"){
//         $(this).stop().slideUp(100);
//         $(prevId).slideDown(100);
//     }else if(slideId == 'ost2'){
//         $(prevId).slideDown(100);
//         $(this).stop().slideUp(100);
//     }
    
//     prevId = slideId;

// });

// img1 = document.getElementsByClassName("ost1");
// img1 = document.getElementsByClassName("ost1");
// document.getElementsByClassName("ost1")
// let img1 = document.querySelector("album");

// $(function(){
    // $('.album').stop().slideUp(100)
    // img1.style.visibility = "hidden";
// });

// $(function(){