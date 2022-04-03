// Add Shortcode
function razorpay_link_generator( $atts , $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
		    'course' => 'ugc-law',			
		),
		$atts
	);
	
	$course = $args['course'];
	
	if ($course = 'ugc-law'){
		$razorpay_id = 'pl_JCQp9UQQ1ZzgST';
	}
	elseif ($course = 'lrw'){
		$razorpay_id = 'pl_JCy6fKm9QMEe6D';
	}
	elseif ($course = 'litigation'){
		$razorpay_id = 'pl_JCy9qlqqJSXFud';
	}
	elseif ($course = 'patent'){
		$razorpay_id = 'pl_JCyBxDsD1LSGda';
	}
	elseif ($course = 'copyright'){
		$razorpay_id = 'pl_JCyDbgZG9SJqP7';
	}
	elseif ($course = 'ipr'){
		$razorpay_id = 'pl_JCyFkMtnL0H2lv';
	}
	elseif ($course = 'mooting'){
		$razorpay_id = 'pl_JCyHeaqycq281C';
	}
	elseif ($course = 'mooting'){
		$razorpay_id = 'pl_JCyHeaqycq281C';
	}
	elseif ($course = 'trademarks'){
		$razorpay_id = 'pl_JCyJ05RhjVLl1x';
	}
	elseif ($course = 'tmt'){
		$razorpay_id = 'pl_JCyKSwtHZ5g823';
	}
	elseif ($course = 'ugc-paper1'){
		$razorpay_id = 'pl_JCyMDYgP4uzccj';
	}
	else {
		$razorpay_id = 'pl_JCy6fKm9QMEe6D';
	}
	
//	$output='<form> <span><a href="https://razorpay.com/payment-button/'. $razorpay_id .'/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button">'. $content .'</a></span></form>';
	
	$output='
	<style>.payment-text-dynamic .PaymentButton {color: #f6a11e !important;background: initial !important; } .PaymentButton-text{font-size:unset !important; visibility: hidden;}</style>
	
	<div class="payment-text-dynamic"><form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="'. $razorpay_id .'" async> </script> </form></div>
	
	<script>
	window.onload = () => { var razBtn = document.querySelectorAll(".PaymentButton-contents .PaymentButton-text");
		for (i = 0; i < razBtn.length; ++i) {
			razBtn[i].innerHTML = "'. $content .'"; 
			razBtn[i].style.visibility = "visible";
		}
	}
	</script>
	';
	
return $output;
}
add_shortcode( 'pay-link', 'razorpay_link_generator' );