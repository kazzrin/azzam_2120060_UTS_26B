document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var sum = num1 + num2;
    
    document.getElementById('result').textContent = sum;
});
