class Rope{
    constructor(body1,pointB){
        var options ={
            bodyA : body1,
            pointB : pointB,
            stiffness : 0.04,
            length : 500
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
       
        World.add(myworld,this.rope);
    }

    display(){
        

        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(5.5)
        stroke("red")
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    
}
}