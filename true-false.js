// Falsy:
// 0
// ""
// undefined
// null
// NaN
// false

// Truthy:
// '0', ' ', [], {}, "false" 

// const name = "0";
let name = 12;
if (name || name == 0) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}