class Throw{

    constructor(objectA , objectB){
        var options = {
         bodyA: objectA,
         pointB: objectB,
         length: 10,
         thickness: 5,
         stiffness: 0.3

        }
     

       this.body =  Matter.Constraint.create(options)
       World.add (world,this.body)
    }

    fly(){
        this.body.bodyA = null
    }
    attach(object){
        this.body.bodyA = object;
     }

    display(){
if(this.body.bodyA != null){
        var posA = this.body.bodyA.position
        var posB = this.body.pointB
   console.log(posB)
    stroke ("white")
    strokeWeight (8)
        line (posA.x,posA.y,posB.x,posB.y)
}

    }


}
