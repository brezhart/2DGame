class WorldVisual {
    constructor(world, size, parentNode) {
        this.size = size;
        this.zoom = new Zoom(this);
        this.world = world;

        this.mainContext =  funcs.canvasCreator(size,parentNode);

    }
    clear(ctx){
        ctx.clearRect(0, 0, this.size.w, this.size.h);
    }
    arc(ctx, x, y, r, c = 'black') {
        let visualX = this.zoom.getVisualX(x);
        let visualY = this.zoom.getVisualY(y);
        let visualRadius = this.zoom.getVisualRadius(r);
        ctx.beginPath();
            ctx.fillStyle = c;
            ctx.arc(visualX, visualY, visualRadius, 0, Math.PI * 2);
            ctx.fill();
        ctx.closePath();
    }
    arcAround(ctx, x, y, r, c = 'red') {
        let visualX = this.zoom.getVisualX(x);
        let visualY = this.zoom.getVisualY(y);
        let visualRadius = this.zoom.getVisualRadius(r + 1);
        ctx.beginPath();
        ctx.arc(visualX, visualY, visualRadius, 0, Math.PI * 2);
        ctx.strokeStyle = c;
        ctx.stroke();
        ctx.closePath();
    }
    fillRectSize(ctx, x1, y1, w,h, c = 'black') {
        let visualXF = this.zoom.getVisualX(x1);
        let visualYF = this.zoom.getVisualY(y1);
        let visualXS = this.zoom.getVisualX(x1+w);
        let visualYS = this.zoom.getVisualY(y1+h);
        // ctx.beginPath();
            ctx.fillStyle = c;
            ctx.fillRect(visualXF,visualYF,visualXS - visualXF, visualYS - visualYF);
        // ctx.closePath();
    }
    line(ctx,pos1,pos2,c = 'black', w = 1){
        let visualPos1 = this.zoom.getVisualPos(pos1);
        let visualPos2 = this.zoom.getVisualPos(pos2);
        ctx.beginPath();
            ctx.moveTo(visualPos1.x, visualPos1.y);
            ctx.lineTo(visualPos2.x, visualPos2.y);
            ctx.strokeStyle = c;
            ctx.strokeWidth = w;
            ctx.stroke();
        ctx.closePath();

    };


    mainWorldDraw() {
                // this.clear(this.fourthContext);
        // if (this.hasBalltoView) {
        //     this.arc(this.mainContext, this.ballToView.pos.x, this.ballToView.pos.y, this.ballToView.radius, "pink");
        //     this.arcAround(this.mainContext, this.ballToView.pos.x, this.ballToView.pos.y, this.ballToView.radius, "pink");
        // }
        //this.zoom.updateConstant();
        this.clear(this.mainContext);
        for (let i = 0; i < this.world.size.h; i++) {
            for (let g = 0; g < this.world.size.w; g++) {
                if (this.world.chunks[0].field[i][g] === 1) {
                    this.fillRectSize(this.mainContext, g, i, 1, 1);
                }
            }
        }
    }


}

