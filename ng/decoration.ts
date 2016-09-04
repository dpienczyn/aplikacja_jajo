export class Decoration{
	public color: string;
	public size: number;
  public marginTop: number;
  public marginleft: number;
    
	constructor(color, marginTop, marginleft, size = 20) {
        this.color = color;
        this.marginTop = marginTop;
        this.marginleft = marginleft;
        this.size = size;
    }
}