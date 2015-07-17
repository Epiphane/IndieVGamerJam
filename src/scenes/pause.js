var Pause = Juicy.State.extend({
   constructor: function(prevState) {
      this.prevState = prevState;

      this.text = new Juicy.Text('PAUSED', '40pt Arial', 'red', 'center');
      this.sub = new Juicy.Text('Press ESC to continue', '40pt Arial', 'red', 'center');
   },
   init: function() {
      var self = this;
      this.game.input.on('key', 'ESC', function() {
         self.game.setState(self.prevState);
      });
   },
   render: function(context) {
      this.prevState.render(context);

      this.text.draw(context, GAME_WIDTH / 2, 0);
   }
});