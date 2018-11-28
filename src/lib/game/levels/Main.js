ig.module( 'game.levels.Main' )
.requires( 'impact.image','game.entities.PaddleCpu','game.entities.PaddlePlayer','game.entities.Puck' )
.defines(function(){
LevelMain=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPaddleCpu",
			"x": 0,
			"y": 172
		},
		{
			"type": "EntityPaddlePlayer",
			"x": 704,
			"y": 168
		},
		{
			"type": "EntityPuck",
			"x": 220,
			"y": 180
		}
	],
	"layer": [
		{
			"name": "background",
			"width": 16,
			"height": 10,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/tileset2.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 48,
			"foreground": false,
			"data": [
				[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
				[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
				[3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3],
				[3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3],
				[3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3],
				[3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3],
				[3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3],
				[3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3],
				[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
				[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
			]
		},
		{
			"name": "walls",
			"width": 16,
			"height": 10,
			"linkWithCollision": true,
			"visible": 1,
			"tilesetName": "media/tileset2.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 48,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[0,0,8,0,0,0,0,0,0,0,8,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,8,0,0,0,0,0,0,8,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		},
		{
			"name": "collision",
			"width": 16,
			"height": 10,
			"linkWithCollision": false,
			"visible": 0,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 48,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		}
	]
}/*]JSON*/;
LevelMainResources=[new ig.Image('media/tileset2.png'), new ig.Image('media/tileset2.png')];
});