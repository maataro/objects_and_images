let kittens = [];
let bubbles = [];

function preload() {
	for(let i = 0; i < 4; i++) {
		kittens[i] = loadImage(`kittens/choco${i}.png`);
	}

}

function setup() {
	createCanvas(600, 400);

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
		image(this.img, this.x, this.y, this.r, this.r);
	}

	clicked(posX, posY) {
		if(this.x < posX && this.x + this.r > posX &&
		   this.y < posY && this.y + this.r > posY) {
			    return true;
		}
		return false;
		}
}

function mouseClicked() {
	for (let b of bubbles) {
		if (b.clicked(mouseX, mouseY)) {
			b.img = random(kittens);
		}
	}
}
