# CalculatorCalculator Project
This calculator project was completed as part of an assignment to demonstrate the following skills and concepts:

Implementing basic math operations: The project includes functions for addition, subtraction, multiplication, and division. These functions were tested and verified in the browser's console.
Understanding calculator operations: The project incorporates the concept of a calculator operation consisting of a number, an operator, and another number. Three variables were created to store the parts of a calculator operation: the first number, the operator, and the second number. These variables are used to update the calculator's display.
Creating an operate function: The project includes an operate function that takes an operator and two numbers as parameters. This function calls the appropriate math operation function based on the provided operator.
Building the calculator interface: An HTML calculator interface was created, including buttons for digits, operator functions, and an equals key. The display area was initialized with dummy numbers to ensure correct visual representation.
Adding additional functionality: The project includes a "clear" button and functions to populate the display when number buttons are clicked. The calculator was implemented to handle multiple operations by storing the first number and the chosen operation, and then calling operate when the equals key is pressed.
Handling edge cases: The project addressed potential bugs and edge cases, such as evaluating a single pair of numbers at a time, rounding answers with long decimals, preventing division by zero, and displaying error messages for invalid input.
Getting Started
To access and run the calculator project, follow these steps:

Clone the project repository: git clone <repository-url>
Open the project directory using your preferred code editor.
Open the index.html file in a web browser to view the calculator interface.
Usage
Once you have the calculator interface open in your web browser, you can use it as follows:

Click on the digit buttons to enter numbers. The entered numbers will be displayed in the calculator's display area.
Click on the operator buttons to select the desired operation (addition, subtraction, multiplication, or division).
Enter the second number by clicking on the digit buttons.
Press the equals (=) key to perform the calculation and display the result.
To clear the calculator and start fresh, click the clear (AC) button.
Example Usage
Here's an example to illustrate how the calculator works:

Enter the first number: Click on the digit buttons 1 and 2. The display shows "12".
Select the operator: Click on the addition (+) button.
Enter the second number: Click on the digit button 7. The display updates to "7".
Perform the calculation: Press the equals (=) key. The result of the addition (19) is displayed.
Continue with additional operations: Click on the subtraction (-) button.
Enter the third number: Click on the digit button 5. The display shows "5".
Perform the calculation: Press the equals (=) key. The result of the subtraction (14) is displayed.
Known Issues and Limitations
While the calculator project demonstrates essential functionality, there are a few known issues and limitations to be aware of:

Division by zero: The calculator handles division by zero by displaying an error message and preventing the calculation.
Input validation: The calculator assumes valid input from the user and does not handle cases where invalid or unexpected input is entered.
Precision of decimal results: Results with long decimals are rounded to fit within the display area, which may lead to slight differences in precision.
Pressing equals without entering all numbers or an operator: The calculator may not behave as expected if the equals key is pressed before entering complete input.