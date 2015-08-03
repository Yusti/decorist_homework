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
		$("#price").text("$" + (parseFloat($("#price").text().slice(1)) + parseFloat($("#price").text().slice(1)) / parseFloat($("#quantity").text())).toFixed(2));
		$("#quantity").text(parseInt($("#quantity").text())+1);
		//logic for subtotal need to be changed according to additional purchases
		$("#subtotal").text($("#price").text());
		$("#total").text("$" + (parseFloat($("#subtotal").text().slice(1)) - parseFloat($("#tax").text().slice(1)) - parseFloat($("#shipping").text().slice(1))).toFixed(2));
	});
	$("#delete").on('click',function(event) {
		$("#img-tab").hide();
		$("#price").text((0).toFixed(2));
		$("#quantity").text(0);
		$("#subtotal").text((0).toFixed(2));
		$("#total").text((0).toFixed(2));
	});
	$("#promo").on('click',function(event){
		$("#promo-code").css("visibility","visible");
	});
	setTimeout(function() {
		var bb = $('#popup').blurbox({
		blur: 10,
		animateBlur: true,
		duration: 300,
		autosize: true,
		bgColor: 'rgba(255,255,0,0.2)',
		bodyContent: null,
		closeOnBackgroundClick: true
	})
	bb.show();
	},1000);
});