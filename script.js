function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("result");
    const suggestion = document.getElementById("suggestion");
  
    if (!height || !weight || height <= 0 || weight <= 0) {
      result.textContent = "Please enter valid height and weight.";
      suggestion.textContent = "";
      return;
    }
  
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    result.textContent = `Your BMI is ${bmi}`;
  
    if (bmi < 18.5) {
      suggestion.textContent = "You are underweight. Eat high-protein food, lift weights, and get enough sleep!";
    } else if (bmi >= 18.5 && bmi < 25) {
      suggestion.textContent = "You're in the perfect BMI range. Maintain it with a balanced diet and regular exercise!";
    } else {
      suggestion.textContent = "You are overweight. Focus on cardio, eat clean, avoid junk, and stay active!";
    }
  }
  