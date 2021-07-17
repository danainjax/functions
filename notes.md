 # Binding
another word for a variable
A function binding usually simply acts as a name for a specific piece of the program. Such a binding is defined once and never changed. This makes it easy to confuse the function and its name.

# Function definition: 
A function definition is a regular binding where the value of the binding is a function.

Example: 

const degreesFahrenheit = function(degreesCelsius) {
    return degreesCelsius * 1.8 +32;
};
console.log(degreesFahrenheit(23))

# Defining a Function
A function is created with an expression that starts with the keyword function.
Functions have parameters () and a body {body must be wrapped in curly braces}

# Bindings and Scopes

Each binding has a scope, which is the part of the program in which the binding is visible. For bindings defined outside of any function or block, the scope is the whole program—you can refer to such bindings wherever you want. These are called global.

But bindings created for function parameters or declared inside a function can be referenced only in that function, so they are known as local bindings. Every time the function is called, new instances of these bindings are created. This provides some isolation between functions—each function call acts in its own little world (its local environment) and can often be understood without knowing a lot about what’s going on in the global environment.

Bindings declared with let and const are in fact local to the block that they are declared in, so if you create one of those inside of a loop, the code before and after the loop cannot “see” it. In pre-2015 JavaScript, only functions created new scopes, so old-style bindings, created with the var keyword, are visible throughout the whole function that they appear in—or throughout the global scope, if they are not in a function.

# Function Declaration
There is a slightly shorter way to create a function binding. When the function keyword is used at the start of a statement, it works differently.

`` function add(x, y) {
    return x + y;
}
``
This is a function declaration. The statement defines the binding add and points it at the given function. It is slightly easier to write and doesn’t require a semicolon after the function.

There is one subtlety with this form of function definition.

``
console.log("Lily says hayyyy girrrl:", awake());

function awake() {
  return "I'm awake!";
}
``
=> Lily says hayyyy girrrl: I'm awake!

Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope. This is sometimes useful because it offers the freedom to order code in a way that seems meaningful, without worrying about having to define all functions before they are used.

# Arrow Functions
