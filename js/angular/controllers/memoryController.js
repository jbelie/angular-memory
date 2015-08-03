'use strict';


app.controller("memoryController",function($scope, $routeParams, $location, memoryProvider){

	/*
	 * Init var
	 */
	 $scope.totalPairs = 0;
	 $scope.matchedPairs = 0;
	 $scope.levels = [
      {name:'Easy (6 cards)', value:'easy'},
      {name:'Normal (12 cards)', value:'normal'},
      {name:'Hard (24 cards)', value:'hard'}
    ];
   
	if(angular.isUndefined($routeParams.level))
		 $scope.level = $scope.levels[1].value;
	else
		 $scope.level = $routeParams.level;

	/*
	 * Shuffle cards
	 */
	$scope.shuffle = function(o){
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			return o;
	}
	
	/*
	 * Clone and shuffle cards
	 */
	$scope.duplicate = function(originalCards){
	
		var duplicateCards = angular.copy(originalCards, duplicateCards);
		var allCards = originalCards.concat(duplicateCards);
		var cards = $scope.shuffle(allCards);
	
		for(var i=0;i<cards.length;i++){
			cards[i].flip = false;
			cards[i].id = i;
		}
	
		return cards;
	}
	
	// Get & shuffle cards
	var nbPairs = 12;
	switch($scope.level){
		case "easy":
			nbPairs = 3;
		break;
		case "normal":
			nbPairs = 6;
		break;
		case "easy":
			nbPairs = 12;
		break;
			
	}
	var originalCards = memoryProvider.getCards(nbPairs);
	$scope.cards = $scope.duplicate(originalCards);
	$scope.totalPairs = originalCards.length;
	
	/*
	 * Check cards
	 */
	 var firstSelectCard = false;
	 var secondSelectCard = false;
	 $scope.checkCard = function(card){
		if(firstSelectCard){
			if(!card.flip){
				secondSelectCard = card;
				if(firstSelectCard.url==secondSelectCard.url){
					console.log("Same");
					$scope.matchedPairs++;
					$scope.checkEndGame();
				}else{
					console.log("Not the same");
				}
				
				firstSelectCard = secondSelectCard = false;
				firstSelectCard.flip = secondSelectCard.flip = false;
			}
		}else{
			card.flip = true;
			firstSelectCard = card;
		}
		
	 }

	/*
	 * Check end of game
	 */
	 $scope.checkEndGame = function(){
		if($scope.matchedPairs>=$scope.totalPairs)
			alert("You win !");
	 }
	 
	 /*
	  * Change level
	  */
	 $scope.changeLevel = function(){
		$location.url("/level/"+$scope.level);
	 }
	 

});
