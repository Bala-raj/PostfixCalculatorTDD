
/**
 * The CalculatorController 
 */
function CalculatorController() {
	
	var _self = this;
	
	var IS_OPERATOR = true;
	var IS_NUMBER = false;
	
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
			var keyTriggered = data.keyTriggered;
			console.debug(keyTriggered);
			switch(calculatorService.isOperator(keyTriggered)) {
				case IS_OPERATOR:
					console.debug('is operator ' + keyTriggered);
					//calculatorService.applyOperation(keyTriggered, expression);
					break;
				case IS_NUMBER:
					console.debug('is number ' + keyTriggered);
					
				    break;
			}
			
			calculatorService.sendKeyToServer(keyTriggered); 
		});
	}
	
};