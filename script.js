// Get the input and buttons
const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');

// Add click event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        if (buttonText === '=') {
            // Calculate and display the result
            try {
                // Replace 'x' with '*' for multiplication
                const expression = input.value.replace(/x/g, '*');
                input.value = eval(expression);
            } catch (error) {
                input.value = 'Error';
            }
        } else if (buttonText === 'AC') {
            // Clear the input field
            input.value = '';
        } else if (buttonText === '⬅') {
            // Remove the last character from the input
            input.value = input.value.slice(0, -1);
        } else {
            // Append the button text to the input
            input.value += buttonText;
        }
    });
});
