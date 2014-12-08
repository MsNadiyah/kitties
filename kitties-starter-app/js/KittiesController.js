// Creating the controller for the kittiesApp

angular
	.module("kittiesApp")
	.controller("KittiesController", KittiesControllerFunc);

// Creating the Constructor function "KittiesController" that is part of the controller
function KittiesControllerFunc() {
	// Create the array with the kitties
	this.kittiesList =
		[
			{
				catName: 'Karl',
				monthsOld: 5,
				gender: 'boy',
				image: "images/carl.png",
				adopted: true
			},
			{
				catName: 'Jack',
				monthsOld: 4,
				gender: 'boy',
				image: "images/jack.png",
				adopted: false
			},
			{
				catName: 'Oscar',
				monthsOld: 2,
				gender: 'boy',
				image: "images/oscar.png",
				adopted: false
			},
			{
				catName: 'Princess Mew',
				monthsOld: 3,
				gender: 'girl',
				image: "images/princessmew.png",
				adopted: false
			}
		];	
	this.adoptedKitties = adoptedKitties;
	this.unadoptedKitties = unadoptedKitties;
	this.changeAdoptionStatus = changeAdoptionStatus;


	
	// Function that allows us to change the status of kitty adoption from false to true
	function changeAdoptionStatus(kitty) {
		if (kitty.adopted == false) {
			kitty.adopted = true;
		} else {
			kitty.adopted = false;
		}
	}

	// Function that creates a list of non-adopted kitty --> do I need this?
	// Called in the View (HTML) using ng-filter
	function unadoptedKitties() {
		return this.kittiesList.filter(function(x){
			return x.adopted === false; })
	}

	// Function that creates a list of an adopted kitty
	function adoptedKitties() {
		return this.kittiesList.filter(function(x){
			return x.adopted === true; })
	}
}

