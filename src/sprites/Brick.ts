import { Vector } from "~/types";

export class Brick {
    private brickImage: HTMLImageElement = new Image();

    constructor(
        private bricksWidth: number,
        private bricksHeight: number,
        private position: Vector,
        private brickEnergy: number,
        image: string
    ){
        this.bricksWidth = bricksWidth;
        this.bricksHeight = bricksHeight;
        this.position = position;
        this.brickEnergy = brickEnergy;
        this.brickImage.src = image;
    }

    get width(): number{
        return this.bricksWidth;
    }

    get height(): number{
        return this.bricksHeight;
    }

    get pos(): Vector{
        return this.position;
    }

    get image(): HTMLImageElement{
        return this.brickImage;
    }

    get energy(): number{
        return this.brickEnergy;
    }

    set energy(energy: number){
        this.brickEnergy = energy;
    }
}