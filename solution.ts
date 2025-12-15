//6️⃣ Write a function add that takes two numbers and returns their sum.

function sumofnum(fnum: number, snum: number): number {
  return fnum + snum;
}

console.log(sumofnum(30, 90));

////////////<<<<<<<s2>>>>>///////

class Invoice {
  brand: string;
  amount: number;
  isfact: string;

  constructor(b: string, a: number, i: string) {
    this.brand = b;
    this.amount = a;
    this.isfact = i;
  }
  format() {
    return `${this.brand} owes ${this.amount} for ${this.isfact}`;
  }
}

const inv1 = new Invoice("hekkl", 44, "hfhfh");
console.log(inv1);

inv1.format();
