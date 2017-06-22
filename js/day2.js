


//1.

function getGreeting(name){ // name is just a placeholder that you can call to. The brackets have made 
	//everything inside of them parts of the object to call

	var greeting = "Hello ";
	return greeting + name;

}

console.log(getGreeting('Shane'));

// console.log(getgreeting("Hello")); // this will not work because you can't just make a random
//variable inside a function and then call it out. 



//2.

var city = "New Orleans"

var greet = function (){

	console.log('Hello ' + city)
};

greet (); // this is calling the function


//3. 

// embedding code


 var myouterfunction = function(){

	var a = "a";
	var b = {
		name: "b",
		age: "16"

	};

	console.log(a);
	console.log(b);

	var myinnerfunction = function(){
			
			var b = "y";
			var a = "x";

			console.log(a);
			console.log(b);

			var b = {
				name: "c",
				age: "29"
			}
			
			console.log(b);
		
	}

	myinnerfunction();

			console.log(a);
			console.log(b);	

	}


console.log(myouterfunction()); // this would not work with "y" because Y in is the inner function




// for (var i = 0; i < 10; i++) {

//		var x = i;

// }

//console.log(i,x);