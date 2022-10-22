import { Brick } from "~/sprites/Brick";

export class CanvasView {
    canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private scoreDisplay: HTMLObjectElement | null;
    private start: HTMLObjectElement | null;
    private info: HTMLObjectElement | null;

    constructor(canvasName: string) {
        this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');
        this.scoreDisplay = document.querySelector('#scored');
        this.start = document.querySelector('#start');
        this.info = document.querySelector('#info');
    }

    public clear(): void {
        this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    //https://www.typescriptlang.org/docs/handbook/2/functions.html
    initStartButton(startFunction: (view: CanvasView) => void): void{
        this.start?.addEventListener('click', () => startFunction(this));
    }

    drawScore(score: number): void {
        if(this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString();
    }

    drawInfo(text: string): void {
        if(this.info) this.info.innerHTML = text;
    }

    drawSprite(brick: Brick): void{
        if(!brick) return;
        this.context?.drawImage(
            brick.image,
            brick.pos.x,
            brick.pos.y,
            brick.width,
            brick.height,
        );
    }

    drawBricks(bricks: Brick[]): void{
        bricks.forEach(brick => this.drawSprite(brick));
    }

}