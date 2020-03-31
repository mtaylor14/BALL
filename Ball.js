class Ball{

	constructor(x, y, d, balls){
		this.x = x
		this.y = y
		this.c = color(random(255),random(255),random(255))
		this.d = d
		this.speed = 4
		this.dirX = this.direction()
		this.dirY = this.direction()
		this.balls = balls

	}

	draw(){
		push()
		noStroke();
		fill(this.c)
	
		ellipse(this.x, this.y, this.d)
		pop()

		this.move()
		this.bounce()

	}


	move(){

		this.x += this.speed * this.dirX
		this.y += this.speed * this.dirY

	}

	direction(){
		return floor(random(2)) * 2 - 1
	}

	bounce(){

		//detecta colision entre pelotas
		for(let i=0; i<this.balls.length; i++)
		{
			const dX = this.x - this.balls[i].x;
            const dY = this.y - this.balls[i].y;
            const distance = Math.sqrt(dX * dX + dY * dY);

            if (distance < floor(this.d/2) + floor(this.d/2)) {
                
            	this.balls[i].dirX=-this.balls[i].dirX;
                this.balls[i].dirY=-this.balls[i].dirY;

                this.dirX=-this.dirX;
                this.dirY=-this.dirY;
            }
		}

		//detecta la colision de abajo(del canvas)
		if(this.y > (height - (this.d/2) )){
			this.dirY -=1
		}

		//detecta la colision de arriba(del canvas)
		if(this.y < (0 + (this.d/2) )){
			this.dirY +=1
		}

		//detecta la colision de la derecha(del canvas)
		if(this.x > (width - (this.d/2) )){
			this.dirX -=1
		}

		//detecta la colision de la izquierda(del canvas)
		if(this.x < (0 + (this.d/2) )){
			this.dirX +=1
		}
	}



}