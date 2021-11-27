// Link to reference on panelid's and classes

// https://www.youtube.com/watch?v=hMxGhHNOkCU&list=PLoYCgNOIyGABdI2V8I_SWo22tFpgh2s6_&ab_channel=LearnCode.academy

let currentBGC = document.querySelector("body");
let colorArray = [0, '#f3f842', '#3a526d', '#bc0e21', '#98cda0', '#d128dc', '#dd2b01', '#591ba0', '#db4c96', '#22a75d', '#1dbd5e', '#adbd0e', '#552537'];

$('.button-panel').on('click', function() {
	var buttonId = $(this).attr('data-panelid')


	if(buttonId == "gradient"){
		if(currentBGC.style.backgroundColor == 'red'){
			$('body').css({
			background: '#eb4511',
			background: 'linear-gradient(315deg, #eb4511 0%, #b02e0c 74%)'
			});
		}else if(currentBGC.style.backgroundColor == 'blue'){
			$('body').css({
			background: '#2a2a72',
			background: 'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)'
			});
		}else if(currentBGC.style.backgroundColor == 'green'){
			$('body').css({
				background: '#00b712',
				background: 'linear-gradient(315deg, #00b712 0%, #5aff15 74%)',
			})
		}else if(currentBGC.style.backgroundColor == 'yellow'){
			$('body').css({
				background: '#fbb034',
				background: 'linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)'
			})
		}else{
			alert("Already Gradient or Random Color or NONE");
		}
		$('body').css({
			backgroundRepeat:'no-repeat',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center center',
			backgroundAttachment: 'fixed'
		});

	}

	if(buttonId == "red"){
		$('body').css({background:'red'});
	}else if(buttonId == "blue"){
		$('body').css({background:'blue'});
	}else if(buttonId == "green"){
		$('body').css({background:'green'});
	}else if(buttonId == "yellow"){
		$('body').css({background:'yellow'});
	}

	if(buttonId == "random"){
		var randomNum = Math.floor((Math.random() * 12) + 1);
		$('body').css({background:colorArray[randomNum]});
	}

});

// $('.hover-button').on('hover', function(){
// 	var buttonId = $(this).attr('data-panelid')
// 	if(buttonID == 'hover'){
// 		$('.hover-button').hide(300);
// 	}
// });

$('.hover-button').hover(function(){
	var buttonId = $(this).attr('data-panelid')
	if(buttonId == 'hover'){
		// $(buttonId).css({visibility:'none'});
		// hideButton();
		$('.hover-button').hide(10);	
	}
		// $('.hover-button').show(5000);
});