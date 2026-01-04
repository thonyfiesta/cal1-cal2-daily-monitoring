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


/* ================= AUTO SAVE ================= */
function saveData() {
  const data = [];
  document.querySelectorAll(".num-only").forEach(cell => {
    data.push(cell.textContent);
  });
  localStorage.setItem("warehouseData", JSON.stringify(data));
}

function loadData() {
  const saved = JSON.parse(localStorage.getItem("warehouseData"));
  if (!saved) return;

  document.querySelectorAll(".num-only").forEach((cell, i) => {
    cell.textContent = saved[i] || "";
  });
  calculateAll();
}

document.addEventListener("input", (e) => {
  if (e.target.classList.contains("num-only")) {
    saveData();
  }
});

window.addEventListener("load", loadData);


/* ================= SAVE TO EXCEL ================= */
function exportExcel() {
  let csv = [];
  document.querySelectorAll("#monitoringTable tr").forEach(row => {
    let cols = [];
    row.querySelectorAll("th, td").forEach(cell => {
      cols.push(`"${cell.innerText}"`);
    });
    csv.push(cols.join(","));
  });

  const blob = new Blob([csv.join("\n")], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Warehouse_Daily_Movement_Monitoring.csv";
  link.click();
}

/* ================= Status Colors ================= */
function applyStatusColors() {
  document.querySelectorAll(".num-only").forEach(cell => {
    const val = parseInt(cell.textContent || 0);
    cell.classList.remove("status-zero", "status-active");

    if (val === 0) cell.classList.add("status-zero");
    if (val > 0) cell.classList.add("status-active");
  });
}

applyStatusColors();

/* ================= Fullscreen ================= */
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}



