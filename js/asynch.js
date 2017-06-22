//runs in response to something else-- doesn't just auto-run. Like when you add something to 
// an online shopping cart

/*

var teacher = {

	name: "Shane",
	speak: function(){
		var self = this;
		setTimeout(function(){
				console.log('later my name is ' + self.name);
		}, 1000)

		console.log('now my name is ' + self.name);
	}
}


teacher.speak();



// bound functions -- this is bc in the above one, "this" command changed and it
//didn't know where to call it up.

var teacher = {

	name: "Shane",
	speak: function(){

		console.log('now my name is ' + this.name);
		
		var boundFunction = function(){

				console.log('later my name is ' + this.name);

		}.bind(this);

		setTimeout(boundFunction, 1000);
		
	}
}


teacher.speak();



//new concept: context assignment

var teacher = {name: "Shane"};
var food = ["coffee", "ramen"];

var speak = function(item1, item2){
	console.log(this.name, item1, item2);
}

speak.call(teacher, "coffee", "ramen");
speak.apply(teacher, ["coffee"], ["ramen"]);


*/







	
// 	nextPhotoIndex: function () {

// 		return getNext(this.currentPhotoIndex);
// 	}

// 	prevPhotoIndex: function () {

// 		return getPrev(this.currentPhotoIndex);
// 	}

// 	function (getPrev){

// 		if(i==0){
// 			return "No Previous Photos";
// 		}else{
// 			return slideshow.photolist[i-1],
// 		};
// 	function (getNext){

// 		if(i==2){
// 			return "No More Photos",
// 		}else{
// 			return slideshow.photolist[i+1],
// 		}
		

// 	console.log("now:" + slideshow.currentPhotoIndex);
// 	console.log("next:" + slideshow.prevPhotoIndex);


// }		



// */



















