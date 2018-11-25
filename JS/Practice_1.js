var myModule = (function() {

	counter = 1;

	document.querySelector('.divBuilder').addEventListener('click', function(){

		var div = document.createElement('littlebox');
		var insertDiv = document.querySelector('.divContainer').appendChild(div);
		insertDiv.classList.add('addDiv');
		var myNode = document.createTextNode(counter);
		div.appendChild(myNode);
//		var element = document.getElementById(div);
		counter++;

	});
	document.querySelector('.divContainer').addEventListener('click',
												function(myEvent){
		myEvent.target.remove();
		console.log(document.querySelector('.divContainer'));
	});

	var printArr = function(arr) {
	for(i in arr) {
		console.log (i + ' :' + arr[i])
		}
		Array.isArray
	}

	//
	// document.querySelector('.jsonButton').addEventListener('click', function() {
	// 	var myTextArray = document.querySelector('.text').value;
	// 	var myJas = JSON.parse(myTextArray);
	// 	var right = document.querySelector('.right');
	// 	right.innerHTML = myJas;

	document.querySelector('.jsonButton').addEventListener('click',
												function() {
		var myTextArray = JSON.parse(document.querySelector('.text').value);
		// console.log(myTextArray);
		// console.log(typeof myTextArray);
		var max_of_array = Math.max.apply(null, myTextArray);
		var min_of_array = Math.min.apply(null, myTextArray);

		var right = document.querySelector('.right');
		right.innerHTML = max_of_array;

		var left = document.querySelector('.left');
		left.innerHTML = min_of_array;


	// printArr(myJas);
});

	document.querySelector('.printArray').addEventListener('click', function() {
		for (var i = 0; i < myArray.length; i++) {
				console.log(i + ": " + myArray[i]);
		}
	});

	var myArray = [2, 4, 6, 8, 10, 12];

	document.querySelector('.printObject').addEventListener('click',
		function() {
			for (i in myObject) {
				console.log (i +': ' + myObject[i])
			}
		});
			var myObject = {
			name : 'Azucena',
			job: 'Engineer',
			city: 'Calgary'
			}


})();
