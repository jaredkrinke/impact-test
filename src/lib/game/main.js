ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
    'game.entities.Puck',
    'game.entities.PaddleCpu',
    'game.entities.PaddlePlayer',
    'game.levels.Main'
)
.defines(function(){

GameState = {};
GameState.running = 0;
GameState.won = 1;
GameState.lost = 2;

MyGame = ig.Game.extend({
	font: new ig.Font('media/32pb.font.png'),
	state: GameState.running,
	
	init: function() {
		ig.input.bind(ig.KEY.UP_ARROW, 'up');
		ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
		this.loadLevel(LevelMain);
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
		if (this.state == GameState.running) {
			var pucks = ig.game.getEntitiesByType(EntityPuck);
			if (pucks && pucks.length > 0) {
				var puck = pucks[0];
				if (puck.pos.x < 0) {
					this.state = GameState.won;
				} else if (puck.pos.x > this.backgroundMaps[0].pxWidth) {
					this.state = GameState.lost;
				}
			}
		}
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();

		switch (this.state) {
			case GameState.won:
			this.font.draw('You win!', ig.system.width/2, ig.system.height/2, ig.Font.ALIGN.CENTER);
			break;

			case GameState.lost:
			this.font.draw('You lose!', ig.system.width/2, ig.system.height/2, ig.Font.ALIGN.CENTER);
			break;
		}
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main('#canvas', MyGame, 60, 768, 480, 1);

});
