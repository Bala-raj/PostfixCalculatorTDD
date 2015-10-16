describe('CalculatorService', function() {
	
	var calculatorService = new CalculatorService();
	
	beforeEach(function() {
		calculatorService = new CalculatorService();
	});

	describe('CalculatorService isOperator and isNumber tests', function() {
		
		it('should return true for isNumber and false for isOperator if user enters a +', function() {
			var value = '-';
			var isOperator = calculatorService.isOperator(value);
			var isNumber = calculatorService.isNumber(value);
			
			expect(isNumber).toBe(false);
			expect(isOperator).toBe(true);
		});
		
		it('should return true for isNumber and false for isOperator if user enters a -', function() {
			var value = '-';
			var isOperator = calculatorService.isOperator(value);
			var isNumber = calculatorService.isNumber(value);
			
			expect(isNumber).toBe(false);
			expect(isOperator).toBe(true);
		});
		
		it('should return true for isNumber and false for isOperator if user enters a *', function() {
			var value = '*';
			var isOperator = calculatorService.isOperator(value);
			var isNumber = calculatorService.isNumber(value);
			
			expect(isNumber).toBe(false);
			expect(isOperator).toBe(true);
		});
		
		it('should return true for isNumber and false for isOperator if user enters a /', function() {
			var value = '/';
			var isOperator = calculatorService.isOperator(value);
			var isNumber = calculatorService.isNumber(value);
			
			expect(isNumber).toBe(false);
			expect(isOperator).toBe(true);
		});
		
		it('should return true for isNumber and false for isOperator if user enters a =', function() {
			var value = '=';
			var isOperator = calculatorService.isOperator(value);
			var isNumber = calculatorService.isNumber(value);
			
			expect(isNumber).toBe(false);
			expect(isOperator).toBe(true);
		});
		
		it('should return false for isNumber and true for isOperator if user enters a 1', function() {
			var value = '1';
			var isOperator = calculatorService.isOperator(value);
			var isNumber = calculatorService.isNumber(value);
			
			expect(isNumber).toBe(true);
			expect(isOperator).toBe(false);
		});
		
		it('should return false for isNumber and true for isOperator if user enters a 5', function() {
			var value = '5';
			var isOperator = calculatorService.isOperator(value);
			var isNumber = calculatorService.isNumber(value);
			
			expect(isNumber).toBe(true);
			expect(isOperator).toBe(false);
		});
		
		it('should return false for isNumber and true for isOperator if user enters a 0', function() {
			var value = '0';
			var isOperator = calculatorService.isOperator(value);
			var isNumber = calculatorService.isNumber(value);
			
			expect(isNumber).toBe(true);
			expect(isOperator).toBe(false);
		});
	});
	
	
	describe('CalculatorService calculate', function() {
		
		it('should apply the addition operation and return 11', function() {
			var operator = '+';
			var expression = new Expression('4 7 +');
			var result = calculatorService.calculate(expression);
			
			expect(result).toBe(11);
		});
		
		it('should return 7 and then 4', function() {
			var expression = new Expression('4 7 +');
			var val1 = expression.pop();
			var val2 = expression.pop();
			expect(val1 + val2).toBe(11);
		});
		
		it('should apply the addition operation and return 22', function() {
			var operator = '+';
			var expression = new Expression('15 7 +');
			var result = calculatorService.calculate(expression);
			
			expect(result).toBe(22);
		});
		
	});
	
});