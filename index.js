let canvasCont = document.getElementById('canvasCont');
let w = window.innerWidth;
let h = window.innerHeight;
let viewH = window.innerHeight;
let viewW = window.innerWidth;
canvasCont.style.width = w + "px";
canvasCont.style.height = h + "px";
let world = new World();
let mainHandler = new MainHandler(w, h, canvasCont);
world.initVisual(world, new Size(w, h), canvasCont);
mainHandler.connectToWorld(world);

let fpsCounter = document.getElementById('fps');
let iter = 0;
let lastTimeCalled = 0;
let player = new Player(world,new Pos(0,0));
function loop() {
    if (!world.isPaused) {
        world.tick();
    }
    world.visual.mainWorldDraw();
    player.draw();
    if (player.physic.speed.x + player.physic.speed.y != 0){
        player.physic.tick();
    }
    iter++;

    let timeNow = Date.now();
    let diff = timeNow - lastTimeCalled;
    lastTimeCalled = timeNow;
    if (!(iter % 10)) {
        fpsCounter.innerText = ~~(1 / (diff / 1000));
    }

    window.requestAnimationFrame(loop);
};
loop();

