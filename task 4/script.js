function calculateTriangle() {
    
    let side1 = parseFloat(document.getElementById('side1').value);
    let side2 = parseFloat(document.getElementById('side2').value);
    let side3 = parseFloat(document.getElementById('side3').value);

 
    if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 <= 0 || side2 <= 0 || side3 <= 0) {
        document.getElementById('result').innerText = "Incorrect data";
        return;
    }

 
    let p = (side1 + side2 + side3) / 2;
    

    let area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
    
  
    area = Math.round(area * 1000) / 1000;
    
  
    document.getElementById('result').innerText = "Площа трикутника: " + area;
    
   
    if (side1 * side1 + side2 * side2 === side3 * side3 ||
        side1 * side1 + side3 * side3 === side2 * side2 ||
        side2 * side2 + side3 * side3 === side1 * side1) {
        document.getElementById('result').innerText += "\nЦей трикутник є прямокутним.";
    } else {
        document.getElementById('result').innerText += "\nЦей трикутник не є прямокутним.";
    }
}
