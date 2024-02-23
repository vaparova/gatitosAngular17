export class Gato{
    id: string;
    url: string;
    width: number;
    height: number;
    visible = true;

    constructor(id: string, url: string, width: number, height: number){
        this.id = id;
        this.url = url;
        this.width = width;
        this.height = height;

    }
}