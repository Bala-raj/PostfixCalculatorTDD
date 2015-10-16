describe('Expression tests', function() {
	
	var expression = new Expression();
	
	beforeEach(function() {
		expression = new Expression();
		expression.push('4');
		expression.push(3);
		expression.push('+');
	});
	
	it('should pop the 3, 4 as a number and + as string', function() {
		var intValue1 = expression.pop();
		var intValue2 = expression.pop();
		var strValue = expression.pop();
		
		expect(typeof(strValue)).toBe('string');
		expect(typeof(intValue1)).toBe('number');
		expect(typeof(intValue2)).toBe('number');
	});
	
	it('should pop the 4 first', function() {
		var intValue1 = expression.pop();
		expect(intValue1).toBe(4);
	});
	
	it('should pop the 2 first', function() {
		expression = new Expression('2 3 +');
		var intValue1 = expression.pop();
		expect(intValue1).toBe(2);
	});
	
	it('should pop 55', function() {
		expression = new Expression();
		expression.push(55);
		var intValue1 = expression.pop();
		expect(intValue1).toBe(55);
	});	
	
});