// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    //Make sure the enemeis only occur in the proper rows
    this.width = 100;
    this.height = 80;
    //Setting the Enemy initial location
    this.initLocAndSpeed();
};

Enemy.prototype.randomRow = function() {return Math.floor(Math.random() * 3) + 1;};
Enemy.prototype.randomSpeed = function() {return Math.floor(Math.random() * 200) + 100;};

Enemy.prototype.initLocAndSpeed = function() {
    this.x = -101;
    this.y = this.randomRow() * 83 - 23;
    this.speed = this.randomSpeed();
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if(this.x > canvas.width){
      this.initLocAndSpeed();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.width = 50;
    this.height = 40;
    this.initLoc();
};

Player.prototype.initLoc = function() {
    this.x = this.x = 101 * 2;
    this.y = 403;
};

Player.prototype.update = function(dt) {
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    switch (key) {
        case 'left':
            if (this.x !== 0) this.x -= 101;
            break;
        case 'up':
            if (this.y == 71) {
                this.x = 101 * 2;
                this.y = 403;
            } else {
                this.y -= 83;
            }
            break;
        case 'right':
            if (this.x !== 404) this.x += 101;
            break;
        case 'down':
            if (this.y !== 403) this.y += 83;
            break;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
