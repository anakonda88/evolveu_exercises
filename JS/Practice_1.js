var myModule = (function() {

	counter = 1;

	document.querySelector('.divBuilder').addEventListener('click', function(){

		var div = document.createElement('littlebox');
		// div.id = counter;
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



	//
	// document.querySelector('.divBuilder'), function(){
	//
	// 	//var div = document.getElementById(div);
	// 	var removeDiv = document.querySelector('.divContainer').classList.remove('addDiv');
	//
	// 	var myNode = document.removeTextNode(counter);
	// 	div.removeChild(myNode);
	// 	//var element = document.getElementById(div);
	// 	counter--;
	// });

	var printJas = function(arr) {
	for(i in arr) {
		console.log (i + ' :' + arr[i])
		}
		Array.isArray
	}



	// document.querySelector('.btn').addEventListener('click', function() {
	// 	var text = document.querySelector('.text').value;
	// 	var bottom = document.querySelector('.bottom');
	// 	bottom.innerHTML = text;
	// });

	document.querySelector('.jsonButton').addEventListener('click', function() {
		var myText = document.querySelector('.text').value;
		var myJas = JSON.parse(myText);
		var bottom = document.querySelector('.bottom');
		bottom.innerHTML = myJas;
		console.log(myJas);

		printJas(myJas);
	});

	document.querySelector('.printArray').addEventListener('click', function() {
		for (var i = 0; i < myArray.length; i++) {
				console.log(myArray[i], i);
		}
	});

	var myArray = [1,2,3,4,5,6,7];

	document.querySelector('.printobject').addEventListener('click', function() {
		for(i in myObject) {
			console.log (i +' :' + myObject[i])
		}

		var myObject = {
		name : 'Azucena',
		job: 'Engineer',
		city: 'Calgary'
		}
	});

})
();
