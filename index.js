const makeSpanish = function() {
    console.log("Ole!");
  };
  
  makeSpanish();
  
  const fahrenheit = function(temperature) {
       return temperature * 1.8 + 32
    
    }
   
  
  console.log(fahrenheit(26));

  const hummus = function(factor, recipeName) {
      console.log(recipeName)
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
  };
  
  
  const creamyShrimpPasta = function(factor, recipeName) {
    console.log(`${recipeName}`)
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += 's';
      }
      console.log(`${ingredientAmount}, ${unit}, ${name}`);
    }
    ingredient(1, "handful", "Angel Hair");
    ingredient(1, "cup", "Heavy Whipping Cream");
    ingredient(.25, "stick", "Salted Butter");
    ingredient(1, "pinch", "Garlic Salt");
    ingredient(.5, "cup", "Chicken Broth");
    ingredient(.5, "lb.", "Peeled Deveined Small Shrimp, Tails Off");
}

console.log(creamyShrimpPasta(4, "Creamy Shrimp Pasta *************"));


console.log(hummus(2, "HUMMUS **************"));

const degreesFahrenheit = function(degreesCelsius) {
    return degreesCelsius * 1.8 +32 + " degrees Fahrenheit";
};
console.log(degreesFahrenheit(23))

//Arrow functions

const horn = () => { console.log('hootie hoo!'); }
horn();
let firstName = "Billy "
const name = name => console.log(firstName + 'Smith');
name();

const min = (a, b) => { return Math.min(a, b); };
console.log(min(100, -20));
console.log(min(10, 4500));






