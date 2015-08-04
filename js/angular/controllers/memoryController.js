'use strict';


app.controller("memoryController",function($scope, $routeParams, $location, $timeout, memoryProvider){

	/*
	 * Init var
	 */
	 $scope.totalPairs = 0;
	 $scope.matchedPairs = 0;
	 $scope.levels = [
      {name:'Easy (8 cards)', value:'easy'},
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
			cards[i].complete = false;
			cards[i].id = i;
		}
	
		return cards;
	}
	
	// Get & shuffle cards
	var nbPairs = 12;
	switch($scope.level){
		case "easy":
			nbPairs = 4;
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
	 var sameCard = false;
	 $scope.checkCard = function(card){
		// Second card
		if(firstSelectCard){
			if(!card.flip && !secondSelectCard){
				// Check same cards
				sameCard = false;
				secondSelectCard = card;
				secondSelectCard.flip = true;
				if(firstSelectCard.url==secondSelectCard.url){
					sameCard = true;
					$scope.matchedPairs++;
				}
				
				// Opacity for same cards
				if(sameCard){
					firstSelectCard.complete = secondSelectCard.complete = true;
				}
					
				//Timeout : flip cards for non complete pairs
				$timeout(function(){
					if(!sameCard){
						firstSelectCard.flip = secondSelectCard.flip = false;
					}else{		
						$scope.checkEndGame();
					}
					firstSelectCard = secondSelectCard = false;
				},750);
			}
		}else{
			if(!card.flip){
				// First card	
				card.flip = true;
				firstSelectCard = card;
			}
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
