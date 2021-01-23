class Block {
    constructor(x, y, width, height) {
      var options = {
          'friction':0.3
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      if(this.body.speed<7){
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
       }
       else{
   
       
   
         push()
         World.remove(world, this.body);
         this.visiblity = this.visiblity-1;
         tint (255,this.visiblity)
         
         pop()
       }
     
      
    }
  };
  