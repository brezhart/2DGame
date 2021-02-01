class PhysicsFuncs{
    constructor(){
        this.blockSides  = [new Line(new Pos(0,0.1),new Pos(0,0.9)),
                            new Line(new Pos(0,1),new Pos(1,1)),
                            new Line(new Pos(1,0.9),new Pos(1,0.1)),
                            new Line(new Pos(1,0),new Pos(0,0))];
    }

    intersect(line1,line2) {
        let x1 = line1.pos1.x;
        let y1 = line1.pos1.y;
        let x2 = line1.pos2.x;
        let y2 = line1.pos2.y;
        let x3 = line2.pos1.x;
        let y3 = line2.pos1.y;
        let x4 = line2.pos2.x;
        let y4 = line2.pos2.y;
        let denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
        if (denominator <= 0.001) {
            return false
        }
        let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
        let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator
        if (ua <= 0 || ua >= 1 || ub <= 0 || ub >= 1) {
            return false
        }
        let x = x1 + ua * (x2 - x1);
        let y = y1 + ua * (y2 - y1);
        console.log(x,y,line1,line2);
        return new Pos(x, y);
    }

}
let physicsFuncs = new PhysicsFuncs();
