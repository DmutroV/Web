function findUnique(arr) {
    let count = {};
    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;
    }
    for (let key in count) {
        if (count[key] > 1) {
            return false;
        }
    }
    return true;
}

document.getElementById('findUniqueButton').addEventListener('click', function() {
    let numbersInput = document.getElementById('numbers').value;
    let numbersArray = numbersInput.split(',').map(num => parseInt(num.trim()));
    let resultDiv = document.getElementById('result');
    if (findUnique(numbersArray)) {
        resultDiv.textContent = 'All elements are unique';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'Some elements are not unique';
        resultDiv.style.color = 'red';
    }
});
