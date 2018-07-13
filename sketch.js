let kittens = [];
let bubbles = [];

function preload() {
	for(let i = 0; i < 6; i++) {
		kittens[i] = loadImage(`kittens/choco${i}.png`);
	}
}

function setup() {
	createCanvas(800, 600);

	for (let i = 0; i < 5; i++) {
		let x = random(width);
		let y = random(height);
		let r = random(50, 100);
		let img_kitten = random(kittens);
		bubbles[i] = new Bubble(x, y, r, img_kitten);
	}
}

function draw() {
	background(0);

	for (let b of bubbles) {
		b.move();
		b.show();
	}
}

function mouseClicked() {
	for (let b of bubbles) {
		if (b.clicked(mouseX, mouseY)) {
			b.img = random(kittens);
		}
	}
}


class Bubble {
	constructor(x, y, r, img) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.img = img;
	}

	move() {
		this.x = this.x + random(-2, 2);
		this.y = this.y + random(-2, 2);
	}

	show() {
		image(this.img, this.x, this.y, this.r*2, this.r*2);
	}

	clicked(posX, posY) {
		if(this.x < posX && this.x + this.r*2 > posX &&
		   this.y < posY && this.y + this.r*2 > posY) {
			   return true;
		}
		return false;
	}
}
