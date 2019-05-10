function Ship(x,y,m){

  this.pos = createVector(x,y);
  this.acc = createVector();
  this.vel = createVector(0,1);
  this.mass = m;
  this.health = 1;

  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.intersects = function(other){
    let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    if (d < 4){
      return true;
    }
  }

  this.applyForce = function(force){
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  this.display = function(){
    stroke(255,10);
    strokeWeight(4);
    fill(0,155,255);
    ellipse(this.pos.x, this.pos.y, this.mass, this.mass);
  }
}
