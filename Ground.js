class Ground{

    constructor(x,y){

    var options = {
      isStatic: true
    }
     
  
    this.ground= Bodies.rectangle(x,y,800,10,options)
    World .add(world,this.ground)
  }
  display(){
  
      rectMode(CENTER)
      fill ("yellow")
      rect(this.ground.position.x,this.ground.position.y,800,10)
  }
  }