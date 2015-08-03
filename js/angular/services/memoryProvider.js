var cards = [
	{
		"url"		:	"http://lorempixel.com/225/300/technics/1/",
		"name"		:	"Technic"
	},
	{
		"url"		:	"http://lorempixel.com/225/300/animals/1/",
		"name"		:	"Sport"
	},
	{
		"url"		:	"http://lorempixel.com/225/300/city/1/",
		"name"		:	"City"
	},
	{
		"url"		:	"http://lorempixel.com/225/300/nature/1/",
		"name"		:	"People"
	},
	{
		"url"		:	"http://lorempixel.com/225/300/technics/2/",
		"name"		:	"Technic"
	},
	{
		"url"		:	"http://lorempixel.com/225/300/animals/2/",
		"name"		:	"Sport"
	},
	{
		"url"		:	"http://lorempixel.com/225/300/city/2/",
		"name"		:	"City"
	},
	{
		"url"		:	"http://lorempixel.com/225/300/nature/2/",
		"name"		:	"People"
	},
	{
		"url"		:	"http://lorempixel.com/225/300/technics/3/",
		"name"		:	"Technic"
	},
	{
		"url"		:	"http://lorempixel.com/225/300/animals/4/",
		"name"		:	"Sport"
	},
	{
		"url"		:	"http://lorempixel.com/225/300/city/4/",
		"name"		:	"City"
	},
	{
		"url"		:	"http://lorempixel.com/225/300/nature/4/",
		"name"		:	"People"
	}
];	




app.service('memoryProvider',function(){

		this.getCards = function(nbPairs){
			var cardsWithDifficulty = cards.slice(0,nbPairs);
			return cardsWithDifficulty;
		}
		
});
