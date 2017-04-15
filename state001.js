// defining a single global object (myPlate) and adding some functions in to its prototype (eg preload, create functions)
var myPlate = {};

myPlate.State001 = function (game) {
};

var wong;
var halibut;

myPlate.State001.prototype = {

  preload: function () {
    this.load.atlas('sprites', 'wong-sprites.png', 'wong-sprites.json');
    this.load.spritesheet('button', 'images/button_sprite_sheet.png', 193, 71);
  },

  create: function () {

    this.game.state.start('State002');
    console.log('state 001');

    this.stage.backgroundColor = '#000000';

    wong = this.add.sprite(0, 70, 'sprites');
    wong.frameName = 'wong';

    introMsg = this.add.text(250, 16, '', {fill: '#ffffff'});
    introMsg.text = "Which fish would you like today?";
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

    introMsgOpt2.inputEnabled = true;
    introMsgOpt2.events.onInputDown.add(introAction, this);

    this.add.tween(introMsg).to({alpha: 1}, 3000, Phaser.Easing.Cubic.InOut, true);
    this.add.tween(introMsgOpt1).to({alpha: 1}, 3000, Phaser.Easing.Cubic.InOut, true, 2000);
    this.add.tween(introMsgOpt2).to({alpha: 1}, 3000, Phaser.Easing.Cubic.InOut, true, 3000);
    this.add.tween(introMsgOpt3).to({alpha: 1}, 3000, Phaser.Easing.Cubic.InOut, true, 4000);

    fish = game.add.group();

    halibut = fish.create(280, 181, 'sprites');
    halibut.frameName = 'halibut';
    halibut.price = '20';

    blowfish = fish.create(271, 90, 'sprites');
    blowfish.frameName = 'blowfish';
    blowfish.scale.setTo(1.5);
    blowfish.price = '40';

    cod = fish.create(84, 318, 'sprites');
    cod.frameName = 'cod';
    cod.price = '10';

    fish.setAll('alpha', 0);
    fish.setAll('inputEnabled', true);
    fish.callAll('events.onInputDown.add', 'events.onInputDown', introAction);

    fish.alpha = 1;
    var priceText = {font: 'bold 24pt Arial', fill: 'black', align: 'center'};

    fish.forEach(function(item) {

      var priceTag = game.add.graphics(0, 0);
      priceTag.beginFill(0xFFFF00, 1);
      priceTag.drawCircle(item.centerX, item.centerY, 60);

      var fishPrice = game.add.text(item.centerX - (priceTag.width / 2), item.centerY - (priceTag.height / 2), item.price, priceText);
      fishPrice.alignIn(item, Phaser.CENTER);
      /*
       for (var i = 0; i <= item.length; i++){

       delay += 1000;
       item[i];
       console.log(delay);
       game.add.tween(item[i]).to( { alpha: 1 }, 3000, Phaser.Easing.Cubic.InOut, true, delay);
       }
       */

    });

    this.add.tween(cod).to({alpha: 1}, 3000, Phaser.Easing.Cubic.InOut, true, 2000);
    this.add.tween(halibut).to({alpha: 1}, 3000, Phaser.Easing.Cubic.InOut, true, 3000);
    this.add.tween(blowfish).to({alpha: 1}, 3000, Phaser.Easing.Cubic.InOut, true, 4000);

    //halibut.inputEnabled = true;
    //halibut.events.onInputDown.add(introAction, this);

    //blowfish.events.onInputDown.add(youLose, this);

  },

  update: function () {
    if (blowfish.input.pointerOver())
    {
      blowfish.tint = Math.random() * 0xffffff;
    } else {
      blowfish.tint = 0xffffff;
    }

  }

};

function introAction(item) {

  console.log('clicked: ' + item.frameName);
  console.log('fish price: ' + item.price);

  var money = 21;
  console.log('money: ' + money);

  var noMoneyMsg = game.add.text(250, 16, '', {fill: '#ffffff'});
  var moneyMsg = game.add.text(250, 16, '', {fill: '#ffffff'});

  if (money <= item.price ) {
    introMsg.destroy();
    moneyMsg.destroy();
    noMoneyMsg.text = "Come back when you have enough money.";
  } else if (money >= item.price && item.price == 20 ) {
    this.game.state.start('State002');
  } else {
    introMsg.destroy();
    noMoneyMsg.destroy();
    moneyMsg.text = "Thank you.";
  }

}
