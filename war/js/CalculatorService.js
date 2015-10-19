
/**
 * The CalculatorService 
 */
function CalculatorService() {
	
	var _self = this;
	
	var stack = new Expression();
	
	
	_self.sendExpressionToServer = function(key) {
		console.debug(key);
	}
	
	
	_self.isOperator = function(value) {
		if(value == null || value == undefined || value.match === undefined) return false;
		var matchArr = value.match(/\/|\+|\-|\*|\=/);
		return (matchArr != null && matchArr.length === 1);
	}
	
	
	_self.isNumber = function(value) {
		if(typeof(value) === 'number') return true;
		if(value == null || value == undefined || value.match === undefined) return false;
		var matchArr = value.match(/\d/);
		return (matchArr != null && matchArr.length === 1);
	}
	
	
	_self.applyOperator = function(operator, expression) {
		switch(operator) {
			case '+':
				var operand1 = stack.pop();
				var operand2 = stack.pop();
				var result = operand1 + operand2;
				stack.push(result);
			    break;
		}
	}
	
	
	_self.calculate = function(expression) {
		while(!expression.isEmpty()) {
			var value = expression.pop();
			if(_self.isNumber(value)) {
				stack.push(value);
			} else if(_self.isOperator(value)) {
				_self.applyOperator(value, expression);
			}
		}
		var finalResult = stack.pop();
		console.debug(finalResult);
		return finalResult;
	}
	
	
	_self.sendKeyToServer = function(value) {
		var data = {
			keyTriggered: value
		};
		$.ajax({
			url: '/postfix_calculator_tdd',
			contentType: 'application/json',
			data: data,
			method: 'POST'
		}).done(function(result) {
			console.debug(result);
		});
	}
	
};