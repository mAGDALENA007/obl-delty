// PIERWSZY PRZYPADEK

var A, B, C;
var outputText;

function validate() {

// get the input
A = document.forms["input_form"]["aterm"].value;
B = document.forms["input_form"]["bterm"].value;
C = document.forms["input_form"]["cterm"].value;

// validate a, b and c for first function
if (A == 0) {
    outputText = "<em>A</em> cannot equal zero!";
} else if (isNaN(A)) {
    outputText = "<em>A</em> must be a number!";
} else if (isNaN(B)) {
    outputText = "<em>B</em> must be a number!";
} else if (isNaN(C)) {
    outputText = "<em>C</em> must be a number!";
} else {
    // calculate the result using x = (-B +- sqrt(B^2 - 4AC)) / 2A
    var x1 = (-B - Math.sqrt(Math.pow(B, 2) - 4 * A * C)) / (2 * A);
    var x2 = (-B + Math.sqrt(Math.pow(B, 2) - 4 * A * C)) / (2 * A);
    var delta = (Math.pow(B, 2) - 4 * A * C);
    outputText = "For the equation <strong>" + (A == 1 ? "" : A) + "x\u00B2 + " + (B == 1 ? "" : B) + "x + " + C + " = 0</strong>, x can equal <strong>" + x1 + "</strong> or <strong>" + x2 + "</strong>, and 	&Delta; is equal <strong>" + delta + "</strong>.";
}

// output the result (or errors)
document.getElementById("output_text").innerHTML = outputText;
}
