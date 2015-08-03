'use strict';

app.controller("memoryController",function($scope, $routeParams, $location, memoryProvider){
	/*
	 * Init var
	 */
	 $scope.unmatchedPairs = 0;
	 $scope.matchedPairs = 0;
	 
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
	var originalCards = memoryProvider.getCards();
	$scope.cards = $scope.duplicate(originalCards);
	$scope.unmatchedPairs = originalCards.length;
	
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
					$scope.unmatchedPairs--;
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
		if($scope.unmatchedPairs<=0)
			alert("You win !");
	 }
	 

});
