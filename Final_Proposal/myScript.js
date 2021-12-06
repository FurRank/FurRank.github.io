let counter = 1;

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
        $('#img1').css({
            display:"none"
        });
        $('#img2').css({
            display:"none"
        });
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
        $('#img1').css({
            display:"none"
        });
        $('#img2').css({
            display:"none"
        });
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
        $('#img1').css({
            display:"none"
        });
        $('#img2').css({
            display:"none"
        });
    }
})

$('.button-panel').on('click', function(){
    var buttonId = $(this).attr('data-panelid')
    if(buttonId == "on-click1"){ // Previous
        
        if(counter != 1){
            counter--;
        }
        if(counter == 1){
            $.fn.displayAlbum1();
            // $('#album1').css({
            //     display:"initial"
            // });
            // $('#album2').css({
            //     display:"none"
            // });
            // $('#album3').css({
            //     display:"none"
            // })
            // $('#album4').css({
            //     display:"none"
            // })
            // $('#img1').css({
            //     display:"none"
            // });
            // $('#img2').css({
            //     display:"none"
            // });            
            console.log(counter)
        }else if(counter == 2){
            $.fn.displayAlbum2();
            // $('#album1').css({
            //     display:"none"
            // });
            // $('#album2').css({
            //     display:"initial"
            // });
            // $('#album3').css({
            //     display:"none"
            // })
            // $('#album4').css({
            //     display:"none"
            // })
            // $('#img1').css({
            //     display:"none"
            // });
            // $('#img2').css({
            //     display:"none"
            // });
            // counter--;
            console.log(counter)
        }else if(counter == 3){
            $.fn.displayAlbum3();
            // $('#album1').css({
            //     display:"none"
            // });
            // $('#album2').css({
            //     display:"none"
            // });
            // $('#album3').css({
            //     display:"initial"
            // })
            // $('#album4').css({
            //     display:"none"
            // })
            // $('#img1').css({
            //     display:"none"
            // });
            // $('#img2').css({
            //     display:"none"
            // });
            // counter--;
            console.log(counter)
        }else if(counter == 4){
            // counter--;
        }
        // }else if(counter == 4){
        //     $('#album1').css({
        //         display:"none"
        //     });
        //     $('#album2').css({
        //         display:"none"
        //     });
        //     $('#album3').css({
        //         display:"none"
        //     })
        //     $('#album4').css({
        //         display:"initial"
        //     })
        //     $('#img1').css({
        //         display:"none"
        //     });
        //     $('#img2').css({
        //         display:"none"
        //     });
        //     counter--;
        // }
        // alert("yo button 1")
        // $('.button-panel').click(function(){
            // $('.album').show();
        // $('#album1').css({
        //     display:"initial"
        // });
        // $('#album2').css({
        //     display:"none"
        // });
        // $('#img1').css({
        //     display:"none"
        // });
        // $('#img2').css({
        //     display:"none"
        // });
    }else if(buttonId == 'on-click2'){ //Preview
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
        $('#img1').css({
            display:"initial"
        });   
        $('#img2').css({
            display:"none"
        });  
    }else if(buttonId == 'on-click3'){ //Play
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
        $('#img1').css({
            display:"none"
        });     
        $('#img2').css({
            display:"initial"
        });

    }else if(buttonId == 'on-click4'){ // Next
        // alert("yo button 2")
        if(counter != 4){
            counter++;
        }
        if(counter == 1){
            $.fn.displayAlbum1();
            // $('#album1').css({
            //     display:"initial"
            // });
            // $('#album2').css({
            //     display:"none"
            // });
            // $('#album3').css({
            //     display:"none"
            // })
            // $('#album4').css({
            //     display:"none"
            // })
            // $('#img1').css({
            //     display:"none"
            // });
            // $('#img2').css({
            //     display:"none"
            // });     
            // counter++      
            console.log(counter)
        }else if(counter == 2){
            $.fn.displayAlbum2();
            // $('#album1').css({
            //     display:"none"
            // });
            // $('#album2').css({
            //     display:"initial"
            // });
            // $('#album3').css({
            //     display:"none"
            // })
            // $('#album4').css({
            //     display:"none"
            // })
            // $('#img1').css({
            //     display:"none"
            // });
            // $('#img2').css({
            //     display:"none"
            // });     
            // counter++      
            console.log(counter)
        }else if(counter == 3){
            $.fn.displayAlbum3();
            // $('#album1').css({
            //     display:"none"
            // });
            // $('#album2').css({
            //     display:"none"
            // });
            // $('#album3').css({
            //     display:"initial"
            // })
            // $('#album4').css({
            //     display:"none"
            // })
            // $('#img1').css({
            //     display:"none"
            // });
            // $('#img2').css({
            //     display:"none"
            // });
            // counter++
            console.log(counter)
        }else if(counter == 4){
            $.fn.displayAlbum4();
            // $('#album1').css({
            //     display:"none"
            // });
            // $('#album2').css({
            //     display:"none"
            // });
            // $('#album3').css({
            //     display:"none"
            // })
            // $('#album4').css({
            //     display:"initial"
            // })
            // $('#img1').css({
            //     display:"none"
            // });
            // $('#img2').css({
            //     display:"none"
            // });
            console.log(counter)
        }
        // $('#album1').css({
        //     display:"none"
        // });
        // $('#album2').css({
        //     display:"initial"
        // });
        // $('#album3').css({
        //     display:"none"
        // })
        // $('#album4').css({
        //     display:"none"
        // })
        // $('#img1').css({
        //     display:"none"
        // });
        // $('#img2').css({
        //     display:"none"
        // });
    // });
    }
});

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