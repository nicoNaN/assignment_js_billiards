function Ball(x, y) {
  this.radius = 100;
  this.position = { x: x, y: y};
  this.velocity = 5;
  this.forward = true;
}

Ball.prototype.move = function(direction) {
  if (direction) {
    this.position.x += this.velocity;
    this.position.y += this.velocity;
  } else {
    this.position.x -= this.velocity;
    this.position.y -= this.velocity;
  }
};

Ball.prototype.tic = function() {

  if ( this.position.y > Table.borders.bottom - this.radius / 2 ||
       this.position.y < Table.borders.top ||
       this.position.x > Table.borders.right - this.radius / 2 ||
       this.position.x < Table.borders.left ) {
      console.log("hit wall");
      this.forward = !this.forward;
      this.move(this.forward);
  } else {
    this.move(this.forward);
  }
};
