// FILTER

var students = [
	{name: "john lennon", average: 90},
	{name: "ringo starr", average: 58},
	{name: "paul mccartney", average: 82}

	];

var passingStudents = students.filter(
		
		function(student){

		return student.average > 60;

	}
	);

console.log(passingStudents);

// FIND 

var students = [
	{name: "john lennon", average: 90},
	{name: "ringo starr", average: 58},
	{name: "paul mccartney", average: 82}

	];

var passingStudents = students.find(
		
		function(student){

		return student.average < 60;

	}
	);

console.log(passingStudents);

// REDUCE -- adds sums of all the things named in objects

var students = [
	{name: "john lennon", average: 90, assignment: 6},
	{name: "ringo starr", average: 58, assignment: 10},
	{name: "paul mccartney", average: 82, assignment: 8}

	];

var totalAssignments = students.reduce(
		
		function(sum, current){

		return sum + current.assignment;

	}, 0);

console.log(totalAssignments);

// Assignment -- combining arrays and displaying them

var superHeroes = [
	["batman", "bruce wayne"],
	["spiderman", "peter parker"],
	["the flash", "barry allen"]
	];

var secretIdentity = superHeroes.map(
	function(revealArray){

	return revealArray.join(" is ");

		}
	);
console.log(secretIdentity.join("\n"));

// Assignment -- controlling Array stuff

var players = [

  	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
    {firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
    {firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
    {firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
    {firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
    {firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
    {firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}

];

// find player w name Mike

var command1 = players.find(

	function(monkey){
		return monkey.firstName == "Mike";
	}

	);

console.log(command1);

// array of all players with position RB

var command2 = players.filter(
	
	function(rbarray){

			return rbarray.position == 'RB';
		}
	);
	console.log(command2);


// array of players last names

var command3 = players.map(
	function(lnarray){

		return lnarray.lastName;
	}
	);

	console.log(command3)

// running backs with more than 5 touchdowns

var command4 = players.filter(
	function(rbarray){

		return rbarray.position == "RB" && rbarray.touchdowns > 5;}
		).map(
		function(rbarray){

			return rbarray.firstName + ' ' + rbarray.lastName;
		}
	);

	console.log(command4);

// sum the number of touchdowns scored by runningbacks

var command5 = players.filter(
	function(rbarray){
		return rbarray.position == "RB";
	}
	).reduce(
		function(total,rbarray){ return total += rbarray.touchdowns;
		}, 0);

	console.log(command5);









