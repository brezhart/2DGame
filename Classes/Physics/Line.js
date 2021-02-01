class Line{
    constructor(pos1,pos2){
        this.pos1 = pos1;
        this.pos2 = pos2;
    }
    copy(){
        console.log("COPY REQ", this)
        return new Line(new Pos(this.pos1.x,this.pos1.y),new Pos(this.pos2.x,this.pos2.y))
    }

}