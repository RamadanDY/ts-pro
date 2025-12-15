// const Ramadans = new School()
// Ramadans.location = "hhhh"
// Ramadans.name = "haha"
// Ramadans.population = 444
// console.log(Ramadans)
////make a rep am for the last ai
// class invoice {
//   brand: string;
//   amount: number;
//   isfact: string;
//   ///constructor
//   constructor(b: string, a: number, i: string) {
//     this.brand = b;
//     this.amount = a;
//     this.isfact = i;
//   }
//   // method
//   format() {
//     return `${this.brand} owes ${this.amount} for ${this.isfact}`;
//   }
// }
// const inv1 = new invoice("rama", 300, "work on ai");
// //console.log(inv1);
// const Myarray: invoice[] = [];
// Myarray.push(inv1);
///VISIBILITY IN CLASSES
//Public
var socca = /** @class */ (function () {
    function socca(name) {
        this.name = name;
        console.log("hello ");
    }
    socca.prototype.shoe = function (size) {
        return "".concat(this.name);
    };
    return socca;
}());
var name1 = new socca("Shaban");
console.log(name1);
