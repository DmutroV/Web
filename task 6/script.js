
var firstName = "Іван";
var lastName = "Петров";
var group = "А-123";
var birthYear = 1990;


var isMarried = false;


console.log("Number:");
console.log(birthYear);

console.log("Boolean:");
console.log(isMarried);

console.log("String:");
console.log(firstName);
console.log(lastName);
console.log(group);


var nullVariable = null;
var undefinedVariable;


console.log("Тип змінної nullVariable: " + typeof nullVariable);
console.log("Тип змінної undefinedVariable: " + typeof undefinedVariable);


var outputDiv = document.getElementById("output");
outputDiv.innerHTML = "Ім'я: " + firstName + "<br>" +
                      "Прізвище: " + lastName + "<br>" +
                      "Група: " + group + "<br>" +
                      "Рік народження: " + birthYear + "<br>" +
                      "Сімейний стан: " + isMarried;
