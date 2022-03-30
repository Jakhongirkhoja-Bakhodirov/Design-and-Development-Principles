function ToyFactory() {
    this.toy = ToyDuck();
    this.createToy = function({
        toyType,color,price,name
    }) {
        if(toyType == 'duck') {
            this.toy = new ToyDuck(color,price,name);
        } else if(toyType == 'car') {
            this.toy = new ToyCar(color,price,name);
        }
        return this.toy;
    };
}

function ToyDuck(color,price,name) {
 this.color = color;
 this.price = price;
 this.name = name;
}

function ToyCar(color,price,name) {
    this.color = color;
    this.price = price;
    this.name = name;
}

const toyFactory = new ToyFactory();
const car = toyFactory.createToy({
    toyType : "car",
    color: "black metalic",
    price : 12,
    name : "Hyundai Sonata"
});

const duck = toyFactory.createToy({
    toyType : "duck",
    color: "yellow",
    price : 15,
    name : "Donald Duck 😅"
});

console.log(car instanceof ToyCar);
console.log(duck instanceof ToyDuck);
console.log(duck);
console.log(car);