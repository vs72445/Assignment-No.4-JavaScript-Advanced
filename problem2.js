
// adding event listeners...
const billInput = document.getElementById("bill");
billInput.addEventListener("change", calculateTip);

const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function (slider) {
    slider.addEventListener("input", calculateTip);
});

function calculateTip() {
    // getting the input values...
    let bill = parseFloat(billInput.value);
    let tipPercent = document.getElementById("tip_range").value;

    billInput.value = bill.toFixed(2);
    
    // calculating output values...
    let totalTip = parseFloat((bill * (tipPercent / 100)).toFixed(2));

    let total = parseFloat((bill + totalTip).toFixed(2));

    // printing the output values...
    document.getElementById("tip-amount").textContent = `\$ ${totalTip}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;

    document.getElementById("tip-percent").textContent = `${tipPercent}%`;

}