

/*	var photolist = ["photo1", "photo2", "photo3"];
	var 
	
	var	nextphoto = function(){
			
			photolist[Math.floor(Math.random() * photolist.length)]

			for(var i = 0; i < 3; i++)

			console.log(currentPhotoIndex)

	}; */
		
var slideshow = {
	photolist: ["photo1", "photo2", "photo3"],
	currentPhotoIndex = 0,
	nextPhotoIndex: function () {

		return getNext(this.currentPhotoIndex);
	},

	prevPhotoIndex: function () {

		return getPrev(this.currentPhotoIndex);
	}

	function getPrev(i){

		if (i==0){
			return "No Previous Photos",
		}else{
			return slideshow.photolist[i-1],
		}
		

	console.log("now:" + slideshow.currentPhotoIndex);
	console.log("next:" + slideshow.prevPhotoIndex);


}		

			
			



	

		