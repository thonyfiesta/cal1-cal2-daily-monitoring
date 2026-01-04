// ================= DATE & TIME =================
function updateDateTime() {
  const now = new Date();
  document.getElementById("datetime").innerText =
    now.toLocaleDateString() + " " + now.toLocaleTimeString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

function calculateTotalsMRS() {
  let mrsTotal = 0;


// input only number
document.addEventListener("input", function (e) {
if (e.target.classList.contains("num-only")) {
  e.target.textContent = e.target.textContent.replace(/\D/g, '');
}
});

// Optional: prevent Enter key (clean dashboard look)
document.addEventListener("keydown", function (e) {
if (e.target.classList.contains("num-only") && e.key === "Enter") {
  e.preventDefault();
}
});
  

// Calculate each MRS row
document.querySelectorAll(".mrs-row").forEach(row => {
let rowSum = 0;
  row.querySelectorAll("td[contenteditable]").forEach(cell => {
      rowSum += parseInt(cell.innerText) || 0;
});
  row.querySelector(".row-total").innerText = rowSum;
    mrsTotal += rowSum;
});

  // Update TOTAL MRS row
  document.getElementById("mrs-total").innerText = mrsTotal;

  // KPI
  document.getElementById("kpi-mrs").innerText = mrsTotal;

  }

document.addEventListener("input", calculateTotalsMRS);




function calculateTotalsDELIVERIES() {    
  let deliveriesTotal = 0;

  // Calculate each DELIVERIES row
  document.querySelectorAll(".deliveries-row").forEach(row => {
    let rowSum = 0;
    row.querySelectorAll("td[contenteditable]").forEach(cell => {
      rowSum += parseInt(cell.innerText) || 0;
    });
    row.querySelector(".row-total").innerText = rowSum;
    deliveriesTotal += rowSum;
  });

  // Update TOTAL DELIVERIES row
  document.getElementById("deliveries-total").innerText = deliveriesTotal;

  // KPI
  document.getElementById("kpi-deliveries").innerText = deliveriesTotal;

  }

document.addEventListener("input", calculateTotalsDELIVERIES);




function calculateTotalsTRANSFER() {    
  let transferTotal = 0;

  // Calculate each TRANSFER row
  document.querySelectorAll(".transfer-row").forEach(row => {
    let rowSum = 0;
    row.querySelectorAll("td[contenteditable]").forEach(cell => {
      rowSum += parseInt(cell.innerText) || 0;
    });
    row.querySelector(".row-total").innerText = rowSum;
    transferTotal += rowSum;
  });

  // Update TOTAL TRANSFER row
  document.getElementById("transfer-total").innerText = transferTotal;

  // KPI
  document.getElementById("kpi-transfer").innerText = transferTotal;

  }

document.addEventListener("input", calculateTotalsTRANSFER);





