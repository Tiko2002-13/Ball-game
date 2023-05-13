




class Ball {
    constructor({color,controls,name,speed}) {
        const ballEl = document.createElement("div");
        ballEl.classList.add("ball");
        ballEl.style.background = color;
        document.body.appendChild(ballEl);
        this.initListeners();
        ballEl.innerHTML = name[0];
        this.ballEl = ballEl;
        this.top = 0;
        this.left = 0;
        this.width = 100;
        this.height = 100;
        this.speed = speed;
        this.controls = controls;
    }   
    
    moveRight() {
        if(this.left < 1425) {    
            this.left += this.speed;
            this.ballEl.style.left = `${this.left}px`;
        }
    }
    moveLeft() {
        if(this.left > 0) {    
            this.left -= this.speed;
            this.ballEl.style.left = `${this.left}px`;
        } 
    }
    moveDown() {
        if(this.top < 630) {
            this.top += this.speed;
            this.ballEl.style.top = `${this.top}px`;
        }
    }
    moveUp() {
        if(this.top > 0) {
            this.top -= this.speed;
            this.ballEl.style.top = `${this.top}px`;
        }
    }
    maxsize() {
        this.height += this.size;
        this.width += this.size;
        this.ballEl.style.height = `${this.height}px`;
        this.ballEl.style.width = `${this.width}px`;
    }
    initListeners() {
        document.addEventListener("keydown", (event) => {
            console.log(event)
            switch (event.code) {
                case this.controls.left:
                    this.moveLeft();
                    break;
                case this.controls.right:
                    this.moveRight();
                    break;
                case this.controls.up:
                    this.moveUp();
                    break;
                case this.controls.down:
                    this.moveDown();
                    break;
                case this.controls.Biger:
                    this.maxsize();
                default:
            }
        })
    }
}


