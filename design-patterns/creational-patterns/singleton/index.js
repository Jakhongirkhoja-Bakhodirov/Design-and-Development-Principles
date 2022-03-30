let instance = null;
class Printer {
  constructor(pages) {
    if(Printer._instance) {
     throw new Error('Singleton classes can\'t be instantiated more than once.')
    }
    this.display= function(){
      console.log(`You are connected to the printer. You want to print ${pages} pages.`)
    }
    Printer._instance = this;
  }

  static getInstance(numOfpages){
    if(!instance){
      instance = new Printer(numOfpages);
    }
    return instance;
  }
}

const obj1 = Printer.getInstance(2)
console.log(obj1)
obj1.display()
const obj2 = Printer.getInstance(3)
console.log(obj2)
obj2.display()
console.log(obj2 == obj1)

const onceMoreObject = new Printer();  // this code line causes error
 