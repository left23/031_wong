myPlate.State003 = function (game) {
};


myPlate.State003.prototype = {

  preload: function () {

    this.load.image('wonderland', 'images/wonderland.jpg');

  },

  create: function () {

  console.log('state 003');

    this.stage.backgroundColor = '#000000';

    var wonderland = this.add.sprite(0, 0, 'wonderland');

    aliceMsg = this.add.text(150, 420, '', {fill: '#ffffff'});
    aliceMsg.text = "Welcome. Nice to see you again.";

    aliceMsg.alpha = 0;
    this.add.tween(aliceMsg).to({alpha: 1}, 3000, Phaser.Easing.Cubic.InOut, true);

  },

  update: function () {


  }

};
