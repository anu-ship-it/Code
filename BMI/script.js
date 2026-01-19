 document.addEventListener('DOMContentLoaded', function() {
            // Get DOM elements
            const heightInput = document.getElementById('height');
            const weightInput = document.getElementById('weight');
            const calculateBtn = document.getElementById('calculate-btn');
            const resultContainer = document.getElementById('result-container');
            const bmiValue = document.getElementById('bmi-value');
            const bmiCategory = document.getElementById('bmi-category');
            
            // Add event listener to calculate button
            calculateBtn.addEventListener('click', calculateBMI);
            
            // Function to calculate BMI
            function calculateBMI() {
                // Get input values
                const height = parseFloat(heightInput.value);
                const weight = parseFloat(weightInput.value);
                
                // Validate inputs
                if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
                    alert('Please enter valid height and weight values.');
                    return;
                }
                
                // Calculate BMI (weight in kg / (height in m)^2)
                const heightInMeters = height / 100;
                const bmi = weight / (heightInMeters * heightInMeters);
                
                // Display result
                displayResult(bmi);
            }
            
            // Function to display BMI result
            function displayResult(bmi) {
                // Format BMI to one decimal place
                const formattedBMI = bmi.toFixed(1);
                
                // Determine BMI category and color
                let category, color;
                
                if (bmi < 18.5) {
                    category = 'Underweight';
                    color = '#ef6c00';
                } else if (bmi < 25) {
                    category = 'Normal Weight';
                    color = '#2e7d32';
                } else if (bmi < 30) {
                    category = 'Overweight';
                    color = '#f57c00';
                } else {
                    category = 'Obese';
                    color = '#c62828';
                }
                
                // Update DOM elements
                bmiValue.textContent = formattedBMI;
                bmiValue.style.color = color;
                bmiCategory.textContent = category;
                bmiCategory.style.color = color;
                
                // Show result container
                resultContainer.style.display = 'block';
                
                // Scroll to results
                resultContainer.scrollIntoView({ behavior: 'smooth' });
            }
            
            // Add input validation to prevent negative numbers
            heightInput.addEventListener('input', function() {
                if (this.value < 0) this.value = '';
            });
            
            weightInput.addEventListener('input', function() {
                if (this.value < 0) this.value = '';
            });
            
            // Allow users to press Enter to calculate
            heightInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') calculateBMI();
            });
            
            weightInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') calculateBMI();
            });
        });