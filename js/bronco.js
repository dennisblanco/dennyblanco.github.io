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
		"concrete",
		"jacaranda",
		"river floats",
		"George Saunders",
		"Tobias Wolff",
		"New Orleans",
		"Fender Telecasters",
		"train travel",
		"Mesquite trees",
		"small boats",
		"Beagles",
		"bicycle rides",
		"skateboards",
		"patios",
		"chimeneas",
		"John McPhee",
		"Cuba",
		"southern expressions",
		"cowboy boots",
		"Luis Barragan",
		"Shel Silverstein",
		"Roald Dahl",
		"fish tacos",
		"Manchego cheese",
		"old people",
		"Carrboro",
		"oyster roasts",
		"Houston rap",
		"butaca chairs",
		"papayas",
		"The Met",
		"micheladas",
		"This Is Spinal Tap",
		"169 Bar",
		"pickup trucks",
		"graph paper",
		"Pilot Precise V5 Extra Fine Pens",
		"paperbacks",
		"Steve Martin",
		"hanging plants",
		"ping pong",
		"jeans",
		"Chet Baker",
		"Ryan Adams",
		"Outkast",
		"motor scooters",
		"John Jeremiah Sullivan",
		"interviews",
		"jump shots",
		"road trips",
		"neat handwriting",
		"hammocks",
		"Oxford American",
		"word play",
		"nicknames",
		"minor league baseball",
		"maps",
		"muffulettas",
		"slow mornings",
		"citrus",
		"libraries",
		"Cafe Petisco",
		"great customer service",
		"Crystal Hot Sauce",
		"Internet wormholes",
		"bookstores",
		"bungalows",
		"banana pudding",
		"plywood",
		"waffles",
		"swimming holes",
		"red tractors",
		"T. Rex",
		"unsweet tea",
		"James Salter",
		"shirts with pockets",
		"mommy blogs",
		"Latin America",
		"sweating",
		"Maple View peach ice cream",
		"ceviche",
		"mosaic tile",
		"red pepper flakes"];

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
