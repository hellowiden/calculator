document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('calc-input');
    const buttons = document.querySelectorAll('.calc-btn');
    const body = document.body;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonValue = this.textContent;

            if (buttonValue === 'C') {
                // Clear the input field
                input.value = '';
            } else if (buttonValue === '=') {
                try {
                    // Evaluate the expression and display the result
                    input.value = eval(input.value.replace(',', '.'));
                } catch {
                    // Handle errors by displaying 'Error'
                    input.value = 'Error';
                }
            } else if (buttonValue === '%') {
                // Calculate percentage
                try {
                    input.value = (eval(input.value.replace(',', '.')) / 100).toString();
                } catch {
                    input.value = 'Error';
                }
            } else {
                // Append the button value to the input field
                input.value += buttonValue;
            }
        });
    });

    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        circle.addEventListener('click', function() {
            const circleId = this.id;
            const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(`--${circleId}-background`);

            body.style.background = backgroundColor;
        });
    });
});
