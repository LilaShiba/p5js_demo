var ships = [];
var earth;

function setup(){
  createCanvas(800,800);
  earth = new Gravity();

  for (var i = 0; i < 10; i++){
    x = random(200,100);
    y = random(200,100);
    m = 6;
    ships[i] = new Ship(x,y,m);
  }
}

function draw(){
  background(0);
  earth.display();
  for (s of ships){
    let force = earth.attraction(s);
    s.applyForce(force);
    s.display();
    s.update();
    for(ss of ships){
      if(s.intersects(ss) && random(1) < 0.001){
        s.health -= 0.1;
        ships.push(new Ship(s.pos.x,s.pos.y,s.mass / 2));
      }
      if(s.health < 0.1 && s.mass < 0.1){
        ships.pop(s);
      }
      // if(ss.health < 0.5 || ss.mass < 0.1){
      //   ships.pop(ss);
      // }
    }
  }
}
