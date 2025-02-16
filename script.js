// Create and append the button to the body
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Define the function to calculate and display the total sum
const getSum = () => {
    // Get all elements with the class 'price' (the prices in the table)
    const priceElements = document.querySelectorAll('.price');
    
    // Initialize total price to 0
    let totalPrice = 0;

    // Loop through each price element and add its value to the total
    priceElements.forEach(function(priceElement) {
        totalPrice += parseFloat(priceElement.textContent); // Convert the text content to a number
    });

    // Create a new row to display the total price
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', '2');  // Span across both columns (Item and Price)
    totalCell.textContent = `Total Price: ₹${totalPrice}`;

    // Append the new total row to the table
    document.querySelector('table').appendChild(newRow);
    newRow.appendChild(totalCell);
};

// Add an event listener to the button to trigger the getSum function when clicked
getSumBtn.addEventListener("click", getSum);
