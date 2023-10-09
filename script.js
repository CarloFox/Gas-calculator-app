document.addEventListener("DOMContentLoaded", function () {
    const billForm = document.getElementById("bill-form");
    const nextBtn = document.getElementById("next-btn");
    const resultDiv = document.getElementById("result");
    const currentReadingInput = document.getElementById("current-reading");
    const calculateBtn = document.getElementById("calculate-btn");
    const billAmountSpan = document.getElementById("bill-amount");

    let lastReading = 0;

    nextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const lastReadingInput = document.getElementById("last-reading");
        if (lastReadingInput.checkValidity()) {
            lastReading = parseFloat(lastReadingInput.value);
            lastReadingInput.setAttribute("disabled", true);
            nextBtn.setAttribute("disabled", true);
            resultDiv.classList.remove("hidden");
        }
    });

    calculateBtn.addEventListener("click", function () {
        const currentReading = parseFloat(currentReadingInput.value);
        const unitRate = parseFloat(document.getElementById("unit-rate").value);
        const billAmount = (currentReading - lastReading) * unitRate;
        billAmountSpan.textContent = `$${billAmount.toFixed(2)}`;
    });
});
