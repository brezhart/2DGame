class World{
    constructor(){
        this.gravityCoef = 0.2;
        // this.balls = [];
        this.size = new Size(100,100);
        this.chunks = [new Chunk()];
        this.isPaused = false;
        this.functionsToCall = []; // Function to call everyTick;
    }
    isSolid(x,y){
        if (x < 0 || y < 0 || x >= this.size.w || y>= this.size.h){
            return false
        }
        return this.chunks[0].field[y][x] == 1;

    }

    initVisual(...args){
        console.log("THERE", ...args);
        this.visual = new WorldVisual(...args);
    }
    removeFunctionsToCall() {
        this.functionsToCall = [];
    }
    addFunctionToCall(f){
        this.functionsToCall.push(f);
    }
    tick(){
        // for (let i = 0; i < this.balls.length; i++){
        //     this.balls[i].updateSpeed()
        // }
        // for (let i = 0; i < this.balls.length; i++){
        //     this.balls[i].updatePos()
        // }
        // for (let i = 0; i < this.functionsToCall.length; i++){
        //     console.log(this.functionsToCall);
        //     this.functionsToCall[i]();
        // }
    }
    continueGame(){
        this.isPaused = false;
    }


    stopGame(){
        console.log("STOPPING");
        this.isPaused = true;
    }

}