class Chunk{
    constructor(){
        this.size = new Size(100,100);
        this.field = [];
        for (let i = 0; i < this.size.h; i++){
            let newArr = [];
            for (let g = 0; g < this.size.w; g++){
                if (i <= 50){
                    newArr.push(+(Math.random() < 0.02));
                } else {
                    newArr.push(+(i > 50));
                }
            }
            this.field.push(newArr);
        }
    }

}