class Body{
    constructor(controlPoints, fPos,world ){
        this.controlPoints = controlPoints; // {delta:x, delta:y}
        this.pos = fPos;
        this.speed = new Speed(0.1,0.2);
        this.world = world;
        this.onLand = false;
    }
    tick(){
        for (let i = 0; i < 5; i++){
            this.doTick();
        }
    }
    doTick(){
        console.log("---------");
        let deltaX = this.speed.x/5;
        let deltaY = this.speed.y/5;
        let fl = false;
        let minDist = 0;
        let closesControlPoint = 0;
        let side = 0;
        let diffX = 0;
        let diffY = 0;
        for (let i = 0; i < this.controlPoints.length; i++){
            let pointTo = new Pos(this.pos.x + deltaX + this.controlPoints[i].x,this.pos.y + deltaY + this.controlPoints[i].y);
            let blockX = Math.floor(pointTo.x);
            let blockY = Math.floor(pointTo.y);
            let pointFrom = new Pos(this.pos.x + this.controlPoints[i].x ,this.pos.y + this.controlPoints[i].y );
            if (this.world.isSolid(blockX,blockY)){
                let pointFromCopied = new Pos(pointFrom.x - 0.1*funcs.sign(deltaX),pointFrom.y - 0.1*funcs.sign(deltaY));
                let deltaLine = new Line(pointFromCopied,pointTo);
                for (let g = 0; g < 4; g++){
                    let blockSide = physicsFuncs.blockSides[g].copy();
                    console.log(blockSide,"_-_______", physicsFuncs.blockSides[g]);
                    blockSide.pos1.add(blockX,blockY);
                    blockSide.pos2.add(blockX,blockY);
                    let intersectPoint = physicsFuncs.intersect(deltaLine,blockSide);
                    if (intersectPoint != false){
                        let dist = intersectPoint.dist(pointFrom);
                        if (!fl || dist < minDist){
                            console.log(intersectPoint,pointFrom);
                            diffX = intersectPoint.x - pointFrom.x;
                            diffY = intersectPoint.y - pointFrom.y;
                            side = g;
                            closesControlPoint = i;
                            minDist = dist;
                            fl = true;
                        }
                    }
                }
            }
            // this.speed.y+=0.0001;
        }
        if (fl){
            console.log("YES",closesControlPoint,diffX,diffY,"|",this.controlPoints[closesControlPoint], side);
            if (side%2 == 0){ // left side or right side
                this.speed.x = 0;
                // alert("WHAT");
            } else {          // top side or bottom side
                this.speed.y = 0;
            }
            this.pos.x += diffX;
            this.pos.y += diffY;
        } else{
            this.pos.x += deltaX;
            this.pos.y += deltaY;
        }
        this.onLand = false;
        for (let i = 0; i < this.controlPoints.length; i++){
            let pointTo = new Pos(this.pos.x + this.controlPoints[i].x,this.pos.y + this.controlPoints[i].y + 0.01);
            let blockX = Math.floor(pointTo.x);
            let blockY = Math.floor(pointTo.y);
            if (this.world.isSolid(blockX,blockY)){
                this.onLand = true;
            }
            // this.speed.y+=0.0001;
        }
        if (!this.onLand){
            this.speed.y += 1/400;
            this.speed.x *= 0.99;
            // this.speed.y*=1.05
        } else {
            this.speed.x *= 0.97;
        }
    }

}