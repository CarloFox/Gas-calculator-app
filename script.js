document.addEventListener("DOMContentLoaded", function () {
    const billForm = document.getElementById("bill-form");
    const calculateBtn = document.getElementById("calculate-btn");
    const resultDiv = document.getElementById("result");
    const unitRateBillAmountSpan = document.getElementById("unit-rate-bill-amount");
    const adminChargeSoFarSpan = document.getElementById("admin-charge-so-far");
    const totalBillSpan = document.getElementById("total-bill");

    calculateBtn.addEventListener("click", function () {
        const lastReading = parseFloat(document.getElementById("last-reading").value);
        const currentReading = parseFloat(document.getElementById("current-reading").value);
        const unitRate = parseFloat(document.getElementById("unit-rate").value);
        const lastBillDate = document.getElementById("last-bill-date").value;
        const adminChargeRate = parseFloat(document.getElementById("admin-charge-rate").value) || 0.29588;

        const unitRateBillAmount = (currentReading - lastReading) * unitRate;
        unitRateBillAmountSpan.textContent = `£${unitRateBillAmount.toFixed(2)}`;

        if (lastBillDate && adminChargeRate) {
            const lastBillDateObj = new Date(lastBillDate);
            const currentDate = new Date();
            const daysDifference = Math.floor((currentDate - lastBillDateObj) / (1000 * 60 * 60 * 24));
            const adminChargeSoFar = daysDifference * adminChargeRate;
            adminChargeSoFarSpan.textContent = `£${adminChargeSoFar.toFixed(2)}`;

            if (!isNaN(unitRateBillAmount)) {
                const totalBill = unitRateBillAmount + adminChargeSoFar;
                totalBillSpan.textContent = `£${totalBill.toFixed(2)}`;
            } else {
                totalBillSpan.textContent = "";
            }
        } else {
            adminChargeSoFarSpan.textContent = "";
            totalBillSpan.textContent = "";
        }

        resultDiv.classList.remove("hidden");
    });
});
