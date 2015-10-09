
/**
 * The CalculatorController 
 */
function CalculatorController() {
	
	var _self = this;
	
	var calculatorView = new CalculatorView();
	var calculatorService = new CalculatorService();
	
	
    _self.handleKeypress = function(key) {
		console.debug(key);
	}
	
	
	_self.run = function() {
		console.debug('init');
		
		var observer = $.Deferred();
		calculatorView.bindKeyClickEvent(observer);
		calculatorView.bindKeypressEvent(observer);
		
		observer.progress(function(data) {
			console.debug(data.keyTriggered);
		});
	}
	
};