'use strict';

app.directive('cardDecorate',function(){
	return{
		restrict	:	'E',
		replace		:	true,
		templateUrl :	'views/card/decorator/cardHTML.html' 
	}
});
