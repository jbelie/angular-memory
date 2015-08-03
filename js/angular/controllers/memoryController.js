'use strict';

app.controller("memoryController",function($scope,$routeParams,memoryProvider){
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
	
		var duplicateCards = originalCards.slice(0);
		var allCards = originalCards.concat(duplicateCards);
		var cards = $scope.shuffle(allCards);

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
			secondSelectCard = card;
			if(firstSelectCard.url==secondSelectCard.url){
				console.log("Same");
				$scope.unmatchedPairs--;
				$scope.matchedPairs++;
			}else{
				console.log("Not the same");
			}
			
			firstSelectCard = secondSelectCard = false;
		}else{
			firstSelectCard = card;
		}
			
	 }

});
