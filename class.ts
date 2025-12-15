/*
 const Ramadans = new School()
Ramadans.location = "hhhh"
Ramadans.name = "haha"
Ramadans.population = 444
console.log(Ramadans)


//make a rep am for the last ai

class invoice {
  brand: string;
  amount: number;
  isfact: string;

  ///constructor
  constructor(b: string, a: number, i: string) {
    this.brand = b;
    this.amount = a;
    this.isfact = i;
  }
  // method
  format() {
    return `${this.brand} owes ${this.amount} for ${this.isfact}`;
  }
}

const inv1 = new invoice("rama", 300, "work on ai");

//console.log(inv1);

const Myarray: invoice[] = [];
Myarray.push(inv1);

/VISIBILITY IN CLASSES
Public
/*
class socca {
  public constructor(public name: string) {
    console.log("hello ");
  }
  public shoe(size: number) {
    return `${this.name}`;
  }
}

const name1 = new socca("Shaban");
console.log(name1);
*/

//// interface with classes to define the type

interface follow {
  name: string;
  brand: string;
  type: number;
}

class laptopTypes(name:string,brand: string, type: number) implements follow {
  constructor(name:string, brand:string, type:number) {}
}

 const me = new laptopTypes("name", "Dell", 3310);
 console.log(me)
