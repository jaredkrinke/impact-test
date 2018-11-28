ig.module(
    'game.entities.Paddle'
)
.requires(
    'impact.entity'
)
.defines(function() {
    EntityPaddle = ig.Entity.extend({

        size: { x: 64, y: 128 },
        collides: ig.Entity.COLLIDES.FIXED,

        animSheet: new ig.AnimationSheet('media/paddle-blue.png', 64, 128),

        init: function (x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('init', 1, [0]);
        }
    });
});
