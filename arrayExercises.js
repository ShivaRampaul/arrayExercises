function printReverse(arr) {
	for(var i = arr.length-1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	if(arr[arr.length-1] !== arr[arr.length-2] ) {
			return false;
		}
	for(var i = 0; i < arr.length-1; i++) {
		if(arr[i] !== arr[i+1]) {
			break;
			return false;
		}
		return true;
	}
}

function sumArray(arr) {
	var sum = 0;
	arr.forEach(function(num){
		sum += num;
	})
	return sum;
}

function max(arr) {
	var max = 0;
	arr.forEach(function(num){
		if(num > max) {
			max = num;
		}
	})	
	return max;
}