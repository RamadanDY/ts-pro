//6️⃣ Write a function add that takes two numbers and returns their sum.
//q2
//Defines a class named Invoice with the following properties:
// brand (string)
// amount (number)
// isfact (string)
// Includes a constructor to initialize all the class properties.
// Implements a method called format() that returns a descriptive string containing the invoice details.
// Creates one object of the Invoice class.
// Declares an array that stores objects of type Invoice and adds the created object to the array.
var Invoice = /** @class */ (function () {
    function Invoice(b, a, i) {
        this.brand = b;
        this.amount = a;
        this.isfact = i;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.brand, " owes ").concat(this.amount, " for ").concat(this.isfact);
    };
    return Invoice;
}());
var inv1 = new Invoice("hekkl", 44, "hfhfh");
console.log(inv1);
inv1.format();
