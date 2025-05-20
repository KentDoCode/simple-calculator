function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    var result;

    if (isNaN(num1) || isNaN(num2)){
        result = "Please enter a valid number";
    } else {
        switch (operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 == 0 ){
                    result = "Cannot divide by zero";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = "Invalid Operator";
        }

    }

    document.getElementById('result').innerText = 'Result: ' + result;
}