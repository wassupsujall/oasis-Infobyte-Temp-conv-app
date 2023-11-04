document.addEventListener("DOMContentLoaded", function() {
    const temperatureInput = document.getElementById("temperatureInput");
    const unitSelect = document.getElementById("unitSelect");
    const convertButton = document.getElementById("convertButton");
    const result = document.getElementById("result");

    // Add a tooltip to the Convert button
    convertButton.addEventListener("mouseover", function() {
        convertButton.style.backgroundColor = "#0056b3";
        convertButton.textContent = "Convert!";
    });

    convertButton.addEventListener("mouseout", function() {
        convertButton.style.backgroundColor = "#007bff";
        convertButton.textContent = "Convert";
    });

    // Add a transition effect to the result display
    result.style.transition = "opacity 0.5s ease";

    convertButton.addEventListener("click", function() {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let convertedTemperature;

        if (unit === "celsius") {
            convertedTemperature = (temperature - 32) * (5/9);
        } else {
            convertedTemperature = (temperature * 9/5) + 32;
        }

        // Fade in the result with a smooth transition
        result.style.opacity = "0";
        setTimeout(function() {
            result.textContent = `Result: ${convertedTemperature.toFixed(2)} ${unit === "celsius" ? "Celsius" : "Fahrenheit"}`;
            result.style.opacity = "1";
        }, 500);
    });
});
