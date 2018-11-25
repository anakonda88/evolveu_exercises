import ll from "./classExer";

test('What does the following do?', () =>{
 let head = ll.getMyLL();
 console.log(head);
});

test('Lets test some link lists', () =>{
  // Place the code below to print every value in the node
  console.log('--- The Value of each node ---');
  const head = ll.getMyLL();
  let x = head;
  while(x){
    console.log("   ",x.value);
    x = x.nextNode;
  }
	// Place the code below to print the number of nodes
  console.log('--- The number of nodes ---');
  x = head;
  let counter = 0;
  while(x){
    x = x.nextNode;
    counter++;
  }
  console.log('  ', counter);


	// Place the code below to add an attribute 'order' with the
	// count to each node
  console.log('--- Add attribute order ---');
  x = head;
  counter = 1;
  while(x){
    x.order = counter;
    console.log('  ', x.order);
    x = x.nextNode;
    counter++;
  }


	// Place the code below to print the value and order for each node
  console.log('---The Value and order each node  ---');
  x = head;
  counter = 1;
  while(x){
    x.order = counter;
    console.log('  ', x. value +' '+ x.order);
    x = x.nextNode;
    counter++;

  }

	// Place the code below to sum the order and print the sum
  console.log('--- The sum of order ---');
  x = head;
  let sum = 0;
  while(x){
    sum = sum + x.order;
    x = x.nextNode;

}
  console.log('  ',sum);

  // Advance excersises


  console.log('1');
});

test("Where code to copy", () => {
	let head = ll.getMyLL();
	console.log('2');
	let x = head;
	while(x){
		console.log(x.value);
		x = x.nextNode;
	}
})
