function Expression(_stringExpression) {
	var _self = this;
	_self.name = "Expression";
	
	if(_stringExpression !== undefined && typeof(_stringExpression) !== 'string') {
		throw ReferenceError('constructor must take a string');
		return;
	}
	
	var theArray = _stringExpression !== undefined ? _stringExpression.split(' ') : [];
	
	
	_self.isEmpty = function() {
		return theArray.length === 0;
	}
	
	
//	_self.popBack = function() {
//		var value = theArray.splice(theArray.length-1);
//		return value[0];
//	}
	
	
	_self.pop = function() {
		var valueArr = theArray.splice(0,1);
		var value = valueArr.join();
		if(isNaN(value)) {
			return value;
		} else {
			return parseInt(value);
		}
	}
	
	
	_self.push = function(value) {
		if(typeof(value) === 'string') {
			theArray.push(value);
		} else {
			if(typeof(value) === 'number') {
				theArray.push(new String(value));
			} else {
				throw ReferenceError('append must take a string or a number');
			}
		}
	}
}