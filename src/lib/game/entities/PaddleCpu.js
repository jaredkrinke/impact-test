ig.module(
    'game.entities.PaddleCpu'
)
.requires(
    'game.entities.Puck',
    'game.entities.Paddle'
)
.defines(function() {
    EntityPaddleCpu = EntityPaddle.extend({
        animSheet: new ig.AnimationSheet('media/paddle-red.png', 64, 128),
        update: function() {
            var pucks = ig.game.getEntitiesByType(EntityPuck);
            if (pucks && pucks.length > 0) {
                var puck = pucks[0];
                if (puck.pos.y + puck.size.y/2 > this.pos.y + this.size.y / 2) {
                    this.vel.y = 100;
                } else {
                    this.vel.y = -100;
                }
            }

            this.parent();
        }
    });
});
