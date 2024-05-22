function calculateTriangle() {
    // Отримання значень сторін трикутника
    let side1 = parseFloat(document.getElementById('side1').value);
    let side2 = parseFloat(document.getElementById('side2').value);
    let side3 = parseFloat(document.getElementById('side3').value);

    // Перевірка на коректність введених даних
    if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 <= 0 || side2 <= 0 || side3 <= 0) {
        document.getElementById('result').innerText = "Incorrect data";
        return;
    }

    // Розрахунок півпериметра
    let p = (side1 + side2 + side3) / 2;
    
    // Розрахунок площі трикутника за формулою Герона
    let area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
    
    // Округлення площі до 3 знаків після коми
    area = Math.round(area * 1000) / 1000;
    
    // Виведення площі трикутника
    document.getElementById('result').innerText = "Площа трикутника: " + area;
    
    // Перевірка на прямокутність
    if (side1 * side1 + side2 * side2 === side3 * side3 ||
        side1 * side1 + side3 * side3 === side2 * side2 ||
        side2 * side2 + side3 * side3 === side1 * side1) {
        document.getElementById('result').innerText += "\nЦей трикутник є прямокутним.";
    } else {
        document.getElementById('result').innerText += "\nЦей трикутник не є прямокутним.";
    }
}
