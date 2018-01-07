$(document).ready(function(){
	
	// sticky Nav
	$(window).scroll(function() {
		if ($(window).scrollTop() > 153) {
			$('.navbar').css({
				'position': 'fixed',
				'top': 0,
				'z-index': 999
			});
		} else {
			$('.navbar').css({
				'position': 'relative',
				'top': 'none'
			});
		}
	});
	
	// Geolocation Get
	
	$.get("https://api.ipdata.co", function (response) {
		var ip = response.ip;
		var city = response.city;
		var country_name = response.country_name;
		var country_code = response.country_code;
		var latitude = response.latitude;
		var longitude = response.longitude;
		var calling_code = response.calling_code;
		var time_zone = response.time_zone;
		//alert(ip);
		//$("#response").html(JSON.stringify(response, null, 4));
	}, "jsonp");


	
	// flexSlider Start	
	$('.flexslider').flexslider({
	 	animation: "slide"
	});
	$('.flexslider1').flexslider({
		animation: "slide"
   });
	//flexSlider End
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
	});
	//$().UItoTop({ easingType: 'easeOutQuart' });


	// corusal Slider
	
		$(".owl-carousel").owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
	

	// Login Function
	$(document).on('click', '.forget_pass', function(){
		$(this).parents('#stud_login').css('display', 'none');
		$('#entr_regid').css('display', 'block');
	});
	$(document).on('click', '.entr_regid_btn', function(){
		$(this).parents('#entr_regid').css('display', 'none');
		$('#entr_otp').css('display', 'block');
	});
	$(document).on('click', '.entr_otp_btn', function(){
		$(this).parents('#entr_otp').css('display', 'none');
		$('#cnfrm_password').css('display', 'block');
	});
	$(document).on('click', '.cnfrm_password_btn', function(){
		$(this).parents('#cnfrm_password').css('display', 'none');
		$('#stud_login').css('display', 'block');
	});
	$(document).on('click', '.back-btn', function(){
		$('#stud_login').css('display', 'block');
		$('#cnfrm_password').css('display', 'none');
		$('#entr_regid').css('display', 'none');
		$('#entr_otp').css('display', 'none');
	});

	// mailer 
	var fullUrl =  location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
    $("#send").click(function(){      
      var formData = $("#emailForm").serialize();
      $("#msg").text("Email sending Please wait..");
                $.ajax({
                url: fullUrl+'/send',
                type: 'POST',
                data: formData,
                success: function(result) {
                                 $("#msg").empty().text(result);
                         },
                error: function(e) {
                                 $("#msg").empty().text("There is some error to send email, Error code:"+e.status +", Error message:"+e.statusText);
                       },
                dataType: "html",
                timeout: 60000
            });
    });




});
