function toCamelCase(cssProperty) {
    return cssProperty.replace(/-([a-z])/g, function(match, letter) {
        return letter.toUpperCase();
    });
}

document.getElementById('convert-button').addEventListener('click', function() {
    const cssProperty = document.getElementById('css-property').value;
    const camelCaseProperty = toCamelCase(cssProperty);
    document.getElementById('result').textContent = camelCaseProperty;
});
