function calculateBMI() {
            let weight = parseFloat(document.getElementById("weight").value);
            let height = parseFloat(document.getElementById("height").value);

            if (!weight || !height || height <= 0) {
                document.getElementById("result").textContent = "Please enter valid values!";
                return;
            }

            let bmi = weight / (height * height);
            let category = "";

            if (bmi < 18) {
                category = "Underweight";
            } else if (bmi < 24.9) {
                category = "Normal weight";
            } else if (bmi < 29.9) {
                category = "Overweight";
            } else {
                category = "Obese";
            }

            document.getElementById("result").textContent = `Your BMI: ${bmi.toFixed(2)} (${category})`;
        }