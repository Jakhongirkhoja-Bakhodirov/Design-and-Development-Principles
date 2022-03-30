class ToyFactory {
    constructor() {
        this.toy = new ToyDuck();
       this.createToy = function({toyType,color,price,name}) {
        if(toyType == 'car') {
            this.toy = new ToyCar(color,price,name);
        } else if(toyType == 'duck') {
            this.toy = new ToyDuck(color,price,name);
        }
        return this.toy;
       }
    }
}

class ToyDuck {
    constructor(color,price,name) {
        this.color = color;
        this.price = price;
        this.name = name;
    }
}


class ToyCar {
    constructor(color,price,name) {
        this.color = color;
        this.price = price;
        this.name = name;
    }
}

const toyFactory = new ToyFactory();

const car = toyFactory.createToy({
    toyType : "car",
    color: "blue",
    price : 12,
    name : "honda"
})

console.log(car);

