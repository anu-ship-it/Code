const resbtn = document.getElementById('cal-btn');
const bmiInput = document.getElementById('bmi-label');
const resInput = document.getElementById('result-label');
const weightInput = document.getElementById('bw-label');
const heightInput = document.getElementById('bh-label');

resbtn.addEventListener('click', () => {
    // Get the values from inputs

    const weight = parseFloat(weightInput.value); // in kg
    const height = parseFloat(heightInput.value); // in cm


    if(isNaN(weight) || isNaN(height) || height <= 0) {
        resInput.textContent = "Please center valid values.";
        return;
    }

    // Convert height cm -> meters
    const heightInMeters = height / 100;

    //BMI formula
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);


    // Show BMI value
    bmiInput.textContent = `Your BMI: ${bmi}`;

    // show category
    let category = "";
    if(bmi < 18.5) {
        category = 'Underweight';
    }else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    }else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    }else{
        category = 'Obese';
    }

    resInput.textContent = `Category: ${category}`;
});