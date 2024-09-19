// Challenge (continuing classes work)

// Implement the classes Candy and ShoppingBasket so you can require them into node and get the following behaviour:

// > const candy = new Candy('Mars', 4.99);

// > candy.getName();
// 'Mars'
// > candy.getPrice();
// 4.99

// > const basket = new ShoppingBasket();
// > basket.getTotalPrice();
// 0

// > basket.addItem(candy);

// > basket.getTotalPrice();
// 4.99

// > basket.addItem(new Candy('Skittle', 3.99));
// > basket.addItem(new Candy('Skittle', 3.99));

// > basket.getTotalPrice();
// 12.97

class Candy {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}


class ShoppingBasket {
    constructor() {
        this.basket = [];
    }

    addItem(candy) {
        return this.basket = this.basket.concat(candy);
    }

    getTotalPrice() {
        //['Mars': 1.99, 'Snickers': 2.50, 'Bounty': 1.20] this.basket
        //[1.99, 2.50, 1.20] prices only
        return this.basket.map(bar => bar.getPrice()).reduce((total, price) => {
            return total + price;
        }, 0);
    }
}


module.exports = {Candy, ShoppingBasket}