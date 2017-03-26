// We don't need to create the myPlate object again, because we already did this in State001
// Instead all we do is create a new function on it called StateB and then set-up a single create function on its prototype

myPlate.State002 = function(game) {
}

myPlate.State002.prototype = {

  preload: function () {

    wong = this.add.sprite(0, 70, 'sprites');
    wong.frameName = 'wong';

    halibut = this.add.sprite(280, 181, 'sprites');
    halibut.frameName = 'halibut';

    var msgStyle =  { font: '24pt Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 500 }

    halibutText = this.add.text(250, 16, '', msgStyle);
    halibutText.text = "Halibut. Excellent choice, Sir. I will prepare a fresh cut for you";
    halibutText.alpha = 0;

    aliceText = this.add.text(250, 16, '', msgStyle);
    aliceText.text = "Please show yourself in. Alice is waiting in the back.";
    aliceText.alpha = 0;

    this.add.tween(halibutText).to( { alpha: 1 }, 1000, Phaser.Easing.Cubic.InOut, true);
    this.add.tween(halibutText).to( { alpha: 0 }, 3000, Phaser.Easing.Cubic.InOut, true, 2000);
    this.add.tween(aliceText).to( { alpha: 1 }, 3000, Phaser.Easing.Cubic.InOut, true, 5000);

    //this.game.state.start('State002');

  },

  create: function () {


  },

  update: function() {


  }

}
