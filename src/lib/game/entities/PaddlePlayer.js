ig.module(
    'game.entities.PaddlePlayer'
)
.requires(
    'game.entities.Paddle'
)
.defines(function() {
    EntityPaddlePlayer = EntityPaddle.extend({
        update: function() {
            if (ig.input.state('up')) {
                this.vel.y = -100;
            } else if (ig.input.state('down')) {
                this.vel.y = 100;
            } else {
                this.vel.y = 0;
            }

            this.parent();
        }
    });
});
