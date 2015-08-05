$(function(){
	$("#minus").on('click',function(event) {
		if ((parseInt($("#quantity").text()) != 1) && (parseInt($("#quantity").text()) != 0)) {
			$("#price").text("$" + (parseFloat($("#price").text().slice(1)) - parseFloat($("#price").text().slice(1)) / parseFloat($("#quantity").text())).toFixed(2));
			$("#quantity").text(parseInt($("#quantity").text())-1);
			//logic for subtotal, tax, shipping need to be changed according to additional purchases
			$("#subtotal").text($("#price").text());
			$("#total").text("$" + (parseFloat($("#subtotal").text().slice(1)) - parseFloat($("#tax").text().slice(1)) - parseFloat($("#shipping").text().slice(1))).toFixed(2));

		}
		else{
			$("#img-tab").hide();
			$("#price").text((0).toFixed(2));
			$("#quantity").text(0);
			$("#subtotal").text((0).toFixed(2));
			$("#total").text((0).toFixed(2));
		};
	});
	$("#plus").on('click',function(event) {
		if (parseInt($("#quantity").text()) != 0) {
			$("#price").text("$" + (parseFloat($("#price").text().slice(1)) + parseFloat($("#price").text().slice(1)) / parseFloat($("#quantity").text())).toFixed(2));
			$("#quantity").text(parseInt($("#quantity").text())+1);
			//logic for subtotal, tax, shipping need to be changed according to additional purchases
			$("#subtotal").text($("#price").text());
			$("#total").text("$" + (parseFloat($("#subtotal").text().slice(1)) + parseFloat($("#tax").text().slice(1)) - parseFloat($("#shipping").text().slice(1))).toFixed(2));

		}
		else{
			$("#img-tab").show();
			$("#price").text("$69.00");
			$("#quantity").text(1);
			$("#subtotal").text("$69.00");
			$("#total").text("$69.00");
		};
	});
	$("#delete").on('click',function(event) {
		$("#img-tab").hide();
		$("#price").text((0).toFixed(2));
		$("#quantity").text(0);
		$("#subtotal").text((0).toFixed(2));
		$("#total").text((0).toFixed(2));
	});
	$(function() {
	    $('#valid').click(function() {
	    	var formValid = true;
	    	$('.req').each(function() {
		    	var formGroup = $(this).parents('.form-group');
		    	if (!this.checkValidity()) {
		    		formValid = false;  
		      	}
		    });
		    if (formValid) {
		      	$(location).attr('href','http://yusti.github.io/decorist_homework/page3');
		    }
		});
	});
});