// We don't need to create the myPlate object again, because we already did this in State001
// Instead all we do is create a new function on it called StateB and then set-up a single create function on its prototype

myPlate.State002 = function(game) {
};

myPlate.State002.prototype = {

  preload: function () {

    wong = this.add.sprite(0, 70, 'sprites');
    wong.frameName = 'wong';

    halibut = this.add.sprite(280, 181, 'sprites');
    halibut.frameName = 'halibut';


  },

  create: function () {
    console.log('state 002');

    var msgStyle =  { font: '24pt Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 500 }

    halibutText = this.add.text(250, 16, '', msgStyle);
    halibutText.text = "Halibut. Excellent choice. I will prepare a fresh cut for you.";
    halibutText.alpha = 0;

    aliceText = this.add.text(250, 106, '', msgStyle);
    aliceText.text = "Please show yourself in. Alice is waiting in the back.";
    aliceText.alpha = 0;

    tweenA = this.add.tween(halibutText).to( { alpha: 1 }, 1000, Phaser.Easing.Cubic.InOut, true);
    tweenB = this.add.tween(aliceText).to( { alpha: 1 }, 3000, Phaser.Easing.Cubic.InOut, true, 1000);




    sign = game.add.group();

    var button = game.make.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);

    window.rich = button;

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);

    // game.input.onDown.addOnce(removeGroup, this);

    sign.add(button);



  },

  update: function() {



  }

};

function removeGroup() {

  game.world.remove(sign);

  // group.destroy();

}

function over() {
  console.log('button over');
  wong.frameName = 'wong-rev';
}

function out() {
  console.log('button out');
  wong.frameName = 'wong';
}

function actionOnClick () {

  console.log('button clicked');
  wong.frameName = 'wong-rev';
  this.game.state.start('State003');

}