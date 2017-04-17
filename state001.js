// defining a single global object (myPlate) and adding some functions in to its prototype (eg preload, create functions)
var myPlate = {};

myPlate.State001 = function (game) {
};

var wong;
var halibut;

myPlate.State001.prototype = {

  preload: function () {
    this.load.atlas('sprites', 'wong-spritesheet.png', 'wong-sprites.json');
    this.load.spritesheet('button', 'images/button_sprite_sheet.png', 193, 71);
    this.load.image('bg', 'images/bg-wong.jpg');
    this.load.image('rain', 'images/rain.png');
  },

  create: function () {

    //this.game.state.start('State002');
    console.log('state 001');

    this.stage.backgroundColor = '#000000';
    bg = this.add.sprite(0, 0, 'bg');


    rain = this.add.sprite(357, 43, 'rain');
    rain.alpha = 0.7;
    //  Pick a random number between 0 and 1
    var rand = game.rnd.realInRange(0, 1);
    this.add.tween(rain).to({alpha: rand}, rand*1000, Phaser.Easing.Cubic.InOut, true).loop(true);

    wong = this.add.sprite(32, 8, 'sprites');
    wong.frameName = 'wong';

    introMsg = this.add.text(100, 16, '', {fill: '#ffffff'});
    introMsg.text = "Which fish would you like today?";
    introMsg.alpha = 0;

    this.add.tween(introMsg).to({alpha: 1}, 1500, Phaser.Easing.Cubic.InOut, true);


    pot = this.add.sprite(0, 207, 'sprites');
    pot.frameName = 'pot';

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

    //fish.setAll('alpha', 0);
    fish.setAll('inputEnabled', true);
    fish.callAll('events.onInputDown.add', 'events.onInputDown', introAction);

    fish.alpha = 0;
    var priceText = {font: 'bold 24pt Arial', fill: 'black', align: 'center'};
    var msgText = {font: 'bold 18pt Arial', fill: 'white', align: 'center'};


    fish.forEach(function(item) {

      var priceTag = game.add.graphics(0, 0);
      priceTag.beginFill(0xFFFF00, 1);
      priceTag.drawCircle(item.centerX, item.centerY, 60);

      var nameTag = game.add.graphics(0, 0);
      nameTag.beginFill(0x000000, 0.6);

      var fishPrice = game.add.text(item.centerX - (priceTag.width / 2), item.centerY - (priceTag.height / 2), item.price, priceText);
      fishPrice.alignIn(item, Phaser.CENTER);

      var fishName = game.add.text(item.centerX - (priceTag.width / 2), item.centerY - (priceTag.height / 2), item.frameName, msgText);
      fishName.alignIn(item, Phaser.TOP_CENTER);

      nameTag.drawRect(item.centerX - (fishName.width / 2), item.y, fishName.width, fishName.height);



    });
/*
    this.add.tween(cod).to({alpha: 1}, 1500, Phaser.Easing.Cubic.InOut, true, 1000);
    this.add.tween(halibut).to({alpha: 1}, 1500, Phaser.Easing.Cubic.InOut, true, 1500);
    this.add.tween(blowfish).to({alpha: 1}, 1500, Phaser.Easing.Cubic.InOut, true, 2000);
*/
    this.add.tween(fish).to({alpha: 1}, 1500, Phaser.Easing.Cubic.InOut, true, 1000);







  },

  update: function () {
    if (blowfish.input.pointerOver())
    {
      blowfish.tint = Math.random() * 0xffffff;
      wong.frameName = 'wong';
    } else {
      blowfish.tint = 0xffffff;
      wong.frameName = 'smiley-wong';
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
  } else if (money >= item.price && item.frameName == 'halibut' ) {
    this.game.state.start('State002');
  } else {
    introMsg.destroy();
    noMoneyMsg.destroy();
    moneyMsg.text = "My pleasure. I will prepare your " + item.frameName;

    wong.frameName = 'wong';

  }

}
