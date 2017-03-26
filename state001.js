// defining a single global object (myPlate) and adding some functions in to its prototype (eg preload, create functions)
var myPlate = {};

myPlate.State001 = function (game) {

};

var wong;
var halibut;

myPlate.State001.prototype = {

  preload: function () {
    this.load.atlas('sprites', 'wong-sprites.png', 'wong-sprites.json');
  },

  create: function () {

    //this.game.state.start('State003');

    this.stage.backgroundColor = '#000000';

    wong = this.add.sprite(0, 70, 'sprites');
    wong.frameName = 'wong';

    introMsg = this.add.text(250, 16, '', {fill: '#ffffff'});
    introMsg.text = "Which fish do you prefer today, Sir?";
    introMsg.alpha = 0;

    introMsgOpt1 = this.add.text(250, 60, '', {fill: '#ffffff'});
    introMsgOpt1.text = "Cod?";
    introMsgOpt1.alpha = 0;
    introMsgOpt2 = this.add.text(350, 60, '', {fill: '#ffffff'});
    introMsgOpt2.text = "Halibut?";
    introMsgOpt2.alpha = 0;
    introMsgOpt3 = this.add.text(500, 60, '', {fill: '#ffffff'});
    introMsgOpt3.text = "Blowfish?";
    introMsgOpt3.alpha = 0;

    var priceText =  { font: '36pt Arial', fill: 'yellow', align: 'left' }

    var graphics = game.add.graphics(0, 0);
    graphics.beginFill(0xFF0000, 1);
    graphics.drawCircle(84, 318, 100);
    graphics.anchor.setTo(0,0);

    codPrice = this.add.text(84, 318, '', priceText);
    codPrice.text = "10";
    codPrice.alpha = 0;
    halibutPrice = this.add.text(280, 181, '', priceText);
    halibutPrice.text = "20";
    halibutPrice.alpha = 0;
    blowfishPrice = this.add.text(271, 90, '', priceText);
    blowfishPrice.text = "40";
    blowfishPrice.alpha = 0;

    this.add.tween(introMsg).to( { alpha: 1 }, 3000, Phaser.Easing.Cubic.InOut, true);
    this.add.tween(introMsgOpt1).to( { alpha: 1 }, 3000, Phaser.Easing.Cubic.InOut, true, 2000);
    this.add.tween(introMsgOpt2).to( { alpha: 1 }, 3000, Phaser.Easing.Cubic.InOut, true, 3000);
    this.add.tween(introMsgOpt3).to( { alpha: 1 }, 3000, Phaser.Easing.Cubic.InOut, true, 4000);

    this.add.tween(codPrice).to( { alpha: 1 }, 3000, Phaser.Easing.Cubic.InOut, true, 2000);
    this.add.tween(halibutPrice).to( { alpha: 1 }, 3000, Phaser.Easing.Cubic.InOut, true, 3000);
    this.add.tween(blowfishPrice).to( { alpha: 1 }, 3000, Phaser.Easing.Cubic.InOut, true, 4000);

    introMsgOpt2.inputEnabled = true;
    introMsgOpt2.events.onInputDown.add(introAction, this);


    halibut = this.add.sprite(280, 181, 'sprites');
    halibut.frameName = 'halibut';
    halibut.alpha = 0;
    //halibut.anchor.setTo(0.5,0.5);

    blowfish = this.add.sprite(271, 90, 'sprites');
    blowfish.frameName = 'blowfish';
    blowfish.alpha = 0;

    cod = this.add.sprite(84, 318, 'sprites');
    cod.frameName = 'cod';
    cod.alpha = 0;

    this.add.tween(cod).to( { alpha: 1 }, 3000, Phaser.Easing.Cubic.InOut, true, 2000);
    this.add.tween(halibut).to( { alpha: 1 }, 3000, Phaser.Easing.Cubic.InOut, true, 3000);
    this.add.tween(blowfish).to( { alpha: 1 }, 3000, Phaser.Easing.Cubic.InOut, true, 4000);

    halibut.inputEnabled = true;
    halibut.events.onInputDown.add(introAction, this);





  },

  update: function () {


  }

}

function introAction () {

  this.game.state.start('State002');

}