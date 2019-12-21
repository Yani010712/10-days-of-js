/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    
    perimeter() {
        return this.sides.reduce( (a, b) => a + b );
    }
}


// define the perimeter method in the class itself:
// class Polygon {
//     constructor(sides) {
//         this.s = sides;
//     }
    
//     perimeter() {
//         var peri = 0;
    
//         for (let e of this.s) {
//             peri += e;
//         }
    
//         return peri;
//     }
// }





// prototype method to define the perimeter method:
// class Polygon {
//     constructor(sides) {
//         this.s = sides;
//     }
// }

// Polygon.prototype.perimeter = function() {
//     var peri = 0;
    
//     for (let e of this.s) {
//         peri += e;
//     }
    
//     return peri;
// }