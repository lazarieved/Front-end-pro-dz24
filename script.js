Humburger.sizeLarge = {
    cost : 100,
    calorie : 40
};

Humburger.sizeSmall = {
    cost : 50,
    calorie : 20
};

Humburger.salad = {
    cost : 20,
    calorie : 5
};

Humburger.cheese = {
    cost : 10,
    calorie : 20
};

Humburger.potatoes = {
    cost : 15,
    calorie : 10
};

Humburger.mayonnaise = {
    cost : 20,
    calorie : 5
};

Humburger.flavoring = {
    cost : 15,
    calorie : 0
};

function Humburger (size, stuffing) {

    this.size = size;
    this.stuffing = stuffing;
    this.addingToppings = [];


    this.addTopping = function (addingTopping) {  
        this.addingToppings.push(addingTopping);
    };
    this.calculateCalories = function (){  

        var calorie  = this.size.calorie + this.stuffing.calorie;
        
        this.addingToppings.forEach (function (addTopping){
            calorie += addTopping.calorie;
        });
        return calorie;
    };
    this.calculatePrice = function (){

        var cost = this.size.cost + this.stuffing.cost;

        this.addingToppings.forEach (function(addTopping){
            cost += addTopping.cost;
        });
        return cost;
    };
};

var hamburger = new Humburger (Humburger.sizeLarge, Humburger.salad, Humburger.mayonnaise);

console.log('Цена: ' + hamburger.calculatePrice());

console.log('Кол-во калорий: ' + hamburger.calculateCalories());

hamburger.addTopping(Humburger.mayonnaise);

console.log('Цена с добавками: ' + hamburger.calculatePrice());

console.log('Кол-во калорий с добавками: ' + hamburger.calculateCalories());