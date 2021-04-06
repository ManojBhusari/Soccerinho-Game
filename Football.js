class Football  {
  constructor(x, y, width, height){
    var options = {
      restitution : 1.5 

     
      
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);

  }
  display() {
    
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(CENTER);
    ellipse( 0, 0, this.width, this.height);
    pop();
 
   }
 
};
