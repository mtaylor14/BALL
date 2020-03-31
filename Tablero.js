class Tablero {

	constructor(w, h, c){
		this.w = w
		this.h = h
		this.c = c
		this.red = {

			x1: floor(this.w / 2),
			y1: 0,
			x2: floor(this.w / 2),
			y2: this.h

		} 
	}

	draw(){
		push()
		noStroke()
		fill(this.c)
		rect(0,0,this.w,this.h)
		pop()

		strokeWeight(10)
		stroke('#F2E7DF')
		line(this.red.x1,this.red.y1,this.red.x2,this.red.y2)
		
	}
}