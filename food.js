function randomtop() {
    let check1 = false;
    while(check1 === false) {
        let a = Math.round((Math.random()) * 650)
        if (a >= 150) {      
            return a;
        }
    }
  }


let foodtop = randomtop();
let foodleft = Math.round((Math.random()) * 1000);
class Food {
    constructor(ob) {
        const foodEl = document.createElement("div");
        foodEl.classList.add("food");
        foodEl.style.background = ob.color;
        this.width = ob.width;
        this.height = ob.height;
        this.top = foodtop;
        this.left = foodleft;
        foodEl.style.top = `${this.top}px`;
        foodEl.style.left = `${this.left}px`;
        foodEl.style.height = `${this.height}px`;
        foodEl.style.width = `${this.width}px`;
        document.body.appendChild(foodEl);
        setInterval(() => {
            let a = Math.round((Math.random()) * 650);
            let b = Math.round((Math.random()) * 1000);
            foodEl.style.top = `${a}px`;
            foodEl.style.left = `${b}px`;
        }, 1000);
        

    }
}





