ig.module(
    'game.entities.Puck'
)
.requires(
    'impact.entity'
)
.defines(function() {
    EntityPuck = ig.Entity.extend({

        size: { x: 48, y: 48 },
        collides: ig.Entity.COLLIDES.ACTIVE,

        animSheet: new ig.AnimationSheet('media/puck.png', 48, 48),

        init: function (x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('init', 0.1, [0]);
            this.vel.x = -200;
            this.vel.y = 100;
            this.bounciness = 1.1;
            this.maxVel.x = 1000;
            this.maxVel.y = 1000;
        }
    });
});
