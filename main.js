//1st problem
function avg(a, b, c, d, e, f, g, h, i, j) {
    return (a + b + c + d + e + f + g + h + i + j) / 10;
}
document.getElementById("avg").innerHTML = avg(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(avg(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// end 1st problem

// 2nd problem
function Area(base, height) {
    return (base * height) / 2;
}
document.getElementById("area").innerHTML = Area(10, 20);
// console.log(Area(10, 20));
// end 2nd problem

// start 3rd problem

function Age(days) {
    return days * 365;
}
console.log(Age(30));
//end 3rd problem

//start 4th problem
function sum(a, b) {
    return a + b;
}
document.getElementById("sum").innerHTML = sum(5, 2);
//end 4th problem

// start fifth problem

var arr = [1, 2, 3, 4, 5, 6, 7];
document.getElementById("arr").innerHTML = arr[1];
//end fifth problem

//start 6th problem

function Name(namee) {
    return namee;
}
document.getElementById("name").innerHTML = Name("omar essam abdulbasser");

// end 6th month

// start 7th problem
function hours(seconds) {
    return seconds * 3600;
}
document.getElementById("seconds").innerHTML = hours(2);

//end 7th problem

//start eighth problem

function integer(a, b, c, d) {
    if (a + b + c + d > 350) {
        return "true";
    } else {
        return "false";
    }

}
document.getElementById("four").innerHTML = integer(100, 200, 300, 40);
//end eighth problem

// start ninth problem

function NU(zero) {
    if (zero == 0) {
        return "true";
    } else {
        return "false";
    }
}

// end =num2n{
// /inth problem
document.getElementById("zero").innerHTML = NU(0);

// start 10th problem

function dev(a, b) {
    return a % b;
}
document.getElementById("divison").innerHTML = dev(13, 5);

// end 10th problem

// start 11th problem

function max(num1, num2) {
    return Math.max(num1, num2);

}
document.getElementById("two").innerHTML = max(100, 200);
//end 11th problem

//start 12th problem

let x = "five";

if (isNaN(x)) {
    console.log("x is not a number");
} else {
    console.log("x is a number");
}
//end 12th problem

// start 13th problem
var d = new Date()
document.getElementById("date").innerHTML = d;

//end 13th problem 
