class Player{
    constructor(world,pos){
         this.world = world;
         this.pos = pos;
         this.physic = new Body([
             new Pos(0,0),
             new Pos(0,-0.5),
             new Pos(0,-1),
             new Pos(0.5,-1),
             new Pos(1,-1),
             new Pos(1,-0.5),
             new Pos(1,0),
             new Pos(0.5,0)],
             new Pos(0,-100),world)
    }
    draw(){
        let context = this.world.visual.mainContext;
        let worldWisual = this.world.visual;
        worldWisual.fillRectSize(context,this.physic.pos.x,this.physic.pos.y,1,-1,"red");
    }
}