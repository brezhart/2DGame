class Pos{
    constructor (x,y){
        this.x = x;
        this.y = y;
    }
    add(x,y){
        this.x += x;
        this.y += y;
    }
    dist(pos2){
        return Math.sqrt((this.x - pos2.x)*(this.x - pos2.x) + (this.y - pos2.y)*(this.y - pos2.y) );
    }
    diffXY(pos2){
        return new Pos(this.x - pos2.x,this.y - pos2.y) ;
    }
}
