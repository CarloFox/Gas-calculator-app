document.addEventListener("DOMContentLoaded", function () {
    const billForm = document.getElementById("bill-form");
    const calculateBtn = document.getElementById("calculate-btn");
    const resultDiv = document.getElementById("result");
    const billAmountSpan = document.getElementById("bill-amount");

    calculateBtn.addEventListener("click", function () {
        const lastReading = parseFloat(document.getElementById("last-reading").value);
        const currentReading = parseFloat(document.getElementById("current-reading").value);
        const unitRate = parseFloat(document.getElementById("unit-rate").value);
        const billAmount = (currentReading - lastReading) * unitRate;
        billAmountSpan.textContent = `£${billAmount.toFixed(2)}`;
        resultDiv.classList.remove("hidden");
    });
});
