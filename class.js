// const Ramadans = new School()
// Ramadans.location = "hhhh"
// Ramadans.name = "haha"
// Ramadans.population = 444
// console.log(Ramadans)
////make a rep am for the last ai
var invoice = /** @class */ (function () {
    ///constructor
    function invoice(b, a, i) {
        this.brand = b;
        this.amount = a;
        this.isfact = i;
    }
    // method
    invoice.prototype.format = function () {
        return "".concat(this.brand, " owes ").concat(this.amount, " for ").concat(this.isfact);
    };
    return invoice;
}());
var inv1 = new invoice("rama", 300, "work on ai");
console.log(inv1);
