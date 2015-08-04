var cards = [
	{
		"url"		:	"http://lorempixel.com/325/225/technics/1/",
		"name"		:	"Technic"
	},
	{
		"url"		:	"http://lorempixel.com/325/225/animals/1/",
		"name"		:	"Sport"
	},
	{
		"url"		:	"http://lorempixel.com/325/225/city/1/",
		"name"		:	"City"
	},
	{
		"url"		:	"http://lorempixel.com/325/225/nature/1/",
		"name"		:	"People"
	},
	{
		"url"		:	"http://lorempixel.com/325/225/technics/2/",
		"name"		:	"Technic"
	},
	{
		"url"		:	"http://lorempixel.com/325/225/animals/2/",
		"name"		:	"Sport"
	},
	{
		"url"		:	"http://lorempixel.com/325/225/city/2/",
		"name"		:	"City"
	},
	{
		"url"		:	"http://lorempixel.com/325/225/nature/2/",
		"name"		:	"People"
	},
	{
		"url"		:	"http://lorempixel.com/325/225/technics/3/",
		"name"		:	"Technic"
	},
	{
		"url"		:	"http://lorempixel.com/325/225/animals/4/",
		"name"		:	"Sport"
	},
	{
		"url"		:	"http://lorempixel.com/325/225/city/4/",
		"name"		:	"City"
	},
	{
		"url"		:	"http://lorempixel.com/325/225/nature/4/",
		"name"		:	"People"
	}
];	




app.service('memoryProvider',function(){

		this.getCards = function(nbPairs){
			var cardsWithDifficulty = cards.slice(0,nbPairs);
			return cardsWithDifficulty;
		}
		
});
