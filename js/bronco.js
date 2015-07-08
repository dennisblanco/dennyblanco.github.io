$( document ).ready(function() {
	$('.man').mouseenter(function() {
		console.log("bronco");
		$(this).addClass('hidden');
		$('.beast').removeClass('hidden');
	});
	
	$('.beast').mouseleave(function() {
		console.log("bronco");
		$(this).addClass('hidden');
		$('.man').removeClass('hidden');
	});

	var Title = 
		[
		"shrimp",
		"jacaranda",
		"river floats",
		"George Saunders",
		"Tobias Wolff",
		"New Orleans",
		"Fender Telecasters",
		"Mesquite trees",
		"small boats",
		"Beagles",
		"bicycle rides",
		"skateboards",
		"patios",
		"chimeneas",
		"John McPhee",
		"cowboy boots",
		"Luis Barragan",
		"Shel Silverstein",
		"Roald Dahl",
		"Carrboro",
		"oyster roasts",
		"Houston rap",
		"butaca chairs",
		"papayas",
		"The Met",
		"micheladas",
		"This Is Spinal Tap",
		"pickup trucks",
		"graph paper",
		"Pilot Precise V5 Extra Fine Pens",
		"Steve Martin",
		"ping pong",
		"Chet Baker",
		"Ryan Adams",
		"Outkast",
		"John Jeremiah Sullivan",
		"interviews",
		"jump shots",
		"neat handwriting",
		"hammocks",
		"Oxford American",
		"word play",
		"minor league baseball",
		"maps",
		"muffulettas",
		"libraries",
		"Cafe Petisco",
		"Crystal Hot Sauce",
		"bookstores",
		"banana pudding",
		"swimming holes",
		"Black Sabbath",
		"unsweet tea",
		"shirts with pockets",
		"mommy blogs",
		"Latin America"];

	var theCount = Math.floor(Math.random() * (Title.length-1)+1);

	setTitle = function() {
  		$(".myTitle").html(Title[theCount]);
  		theCount = Math.floor(Math.random() * (Title.length-1)+1);
  		console.log(Title.length);
  		console.log(theCount);
  		console.log("Current Title:");
  		console.log(Title[theCount]);
  
  	if (theCount == Title.length-1) {
    	theCount = 0;
  		} else {
    	theCount++;
  		}
	};

	setTitle();

	setInterval(function() {
 
  	setTitle();
   
	}, 3000);
});
