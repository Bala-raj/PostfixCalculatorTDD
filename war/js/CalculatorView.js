function CalculatorView() {
	var _self = this;
	
	var KEYCODE_CONST = 48;
	
	
	_self.bindKeyClickEvent = function(observer) {
		$('.calculator').find('.btn-primary').click(function(elem) {
			var numberClicked = elem.currentTarget.value; 
			observer.notify({
				'keyTriggered': numberClicked
			});
		});
	}
	
	
	_self.bindKeypressEvent = function(observer) {
		$('body').keyup(function(_event) { 
			var numberPressed = _event.keyCode - KEYCODE_CONST;
			observer.notify({
				'keyTriggered': numberPressed
			});
		});	
	}
}