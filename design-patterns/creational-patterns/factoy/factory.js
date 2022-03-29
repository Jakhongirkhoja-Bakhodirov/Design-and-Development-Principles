class IceCreamFactory {
    constructor() {
        this.createIcecream = function(flavor) {
            let iceCream;
            if(flavor === 'chocolate') {
                iceCream = new Chocolate();
            } else if(flavor === 'mint') {
                iceCream = new Mint();
            } else if(flavor === 'strawberry') {
                iceCream = new Strawberry();
            }
            return iceCream;
        };
    }
}

class Chocolate {
    #recipe = {};
    _price;
    _sugarAmount;
    constructor() {
        this.iceCreamFlavor = 'chocolate';
        this.message = function() {
            return `You chose the ${this.iceCreamFlavor} flavor.`;
        };
    }

    set price(price) {
        this.price = price;
    }
    
    get price() {
        return this.price;
    }

    addSugar() {
        return 'Logic add Sugar';
    }
}

class Mint {
    #recipe = {};
    _price;
    _sugarAmount;
    constructor() {
        this.iceCreamFlavor = 'mint';
        this.message = function() {
            return `You chose the ${this.iceCreamFlavor} flavor.`;
        };
    }
}


class Strawberry {
    #recipe = {};
    _price;
    _sugarAmount;
    constructor() {
        this.iceCreamFlavor = 'strawberry';
        this.message = function() {
            return `You chose the ${this.iceCreamFlavor} flavor.`;
        };
    }
}

const IceCreamfactory = new IceCreamFactory();

const chocolate = IceCreamfactory.createIcecream('chocolate');
const mint = IceCreamfactory.createIcecream('mint');
const strawberry = IceCreamfactory.createIcecream('strawberry');

console.log(chocolate.message());   
console.log(mint.message());
console.log(strawberry.message());

console.log(chocolate.addSugar());

console.log(chocolate.price);