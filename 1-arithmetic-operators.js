// To solve this challenge, we simply need to do the following:

// Read in the values of length and width.
// Calculate and print the area using the formula area = length x width.
// Calculate and print the perimeter using the formula 2 x (length x width).

function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width);
    
    return perimeter;
}