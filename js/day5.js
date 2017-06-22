
// //1
// var selectedItem = document.querySelector("li.selected");

// //2
// var firstinlist = selectedItem.previousElementSibling;

// 	console.log(firstinlist);

// //3
// var lastinlist = selectedItem.nextElementSibling;

// 	console.log (lastinlist.innerHTML);

// 	console.log(selectedItem);

// //4
// var header = document.getElementsByTagName("header");

// 	console.log(header);


// //5
// var sectioncurrent = document.querySelector('section.current');

// 	console.log(sectioncurrent);

// //6

// var nextsectioncurrent = sectioncurrent.nextElementSibling;
	
// 	console.log(nextsectioncurrent);


// //7

// // var beforesectioncurrent = sectioncurrent.previousElementSibling;
	
// // 	console.log(beforesectioncurrent.getElementsByTagName('h2'));

// //8

// var highlight = document.querySelectorAll('h2.highlight');

// console.log(highlight);


// var result = document.querySelectorAll("section h2"); //supplies the data list for below. it's the sections in h2

// var foo = Array.from( //here are creating an array to use the map with
// 		result // variable above
// 		).map( // this tells it what to do with variables from var results
// 			function(record){ //need a placeholder to produce the array-- this temporarily names each obj "record"
// 				return record.parentElement; // change element from h2 that was selected before, to it's parent
// 				// this is the array! It's made!
// 			}
// 		)

// console.log(foo); //this lets you see it


// var div = document.querySelector("div");
// var a = document.querySelector("a");

// a.href= "http://cnn.com";

// a.innerHTML = "Updated Link Text"



// var newLI = document.createElement("li");

// newLI.innerHTML = "Item 2";

// var list = document.querySelector("ul");
// list.appendChild(newLI);

// console.log(list);

//Editing the DOM commands

//1 - updating coffee

var list = document.querySelector("ul");

var ftcoffee = document.querySelector("ul.coffee");
	var ftcoffee = "fair trade coffee";


console.log(list);






	