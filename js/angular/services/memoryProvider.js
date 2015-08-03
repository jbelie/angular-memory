var cards = [
	{
		"id"		:	1,
		"url"		:	"http://lorempixel.com/225/300/technics/1/",
		"name"		:	"Technic"
	},
	{
		"id"		:	2,
		"url"		:	"http://lorempixel.com/225/300/animals/1/",
		"name"		:	"Sport"
	},
	{
		"id"		:	3,
		"url"		:	"http://lorempixel.com/225/300/city/1/",
		"name"		:	"City"
	},
	{
		"id"		:	4,
		"url"		:	"http://lorempixel.com/225/300/nature/1/",
		"name"		:	"People"
	},
	{
		"id"		:	5,
		"url"		:	"http://lorempixel.com/225/300/technics/2/",
		"name"		:	"Technic"
	},
	{
		"id"		:	6,
		"url"		:	"http://lorempixel.com/225/300/animals/2/",
		"name"		:	"Sport"
	},
	{
		"id"		:	7,
		"url"		:	"http://lorempixel.com/225/300/city/2/",
		"name"		:	"City"
	},
	{
		"id"		:	8,
		"url"		:	"http://lorempixel.com/225/300/nature/2/",
		"name"		:	"People"
	},
	{
		"id"		:	9,
		"url"		:	"http://lorempixel.com/225/300/technics/3/",
		"name"		:	"Technic"
	},
	{
		"id"		:	10,
		"url"		:	"http://lorempixel.com/225/300/animals/4/",
		"name"		:	"Sport"
	},
	{
		"id"		:	11,
		"url"		:	"http://lorempixel.com/225/300/city/4/",
		"name"		:	"City"
	},
	{
		"id"		:	12,
		"url"		:	"http://lorempixel.com/225/300/nature/4/",
		"name"		:	"People"
	}
];	




app.service('memoryProvider',function(){

		this.getCards = function(){
			
			return cards;
		}
		
});
