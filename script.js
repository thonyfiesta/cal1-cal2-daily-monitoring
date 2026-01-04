body {
    font-family: Arial, sans-serif;
    background: #f4f6f8;
    margin: 0;
  }
  
  header {
    background: #1f2937;
    color: white;
    padding: 15px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between; /* ⬅ left title, right datetime */
  }

  #datetime {
    font-size: 34px;
    font-weight: 600;
    text-align: right;
    white-space: nowrap;
  }
  .kpi-container {
    display: flex;
    gap: 20px;
    padding: 20px;
  }
  
  .kpi {
    flex: 1;
    padding: 20px;
    border-radius: 10px;
    color: white;
    font-size: 18px;
  }

  #kpi-mrs, #kpi-deliveries, #kpi-transfer{
    font-size: 33px;
    font-weight: 600;   
  }
  
  .kpi-blue { background: #2563eb; }
  .kpi-green { background: #16a34a; }
  .kpi-orange { background: #ea580c; }
  
  table {
    width: 98%;
    margin: auto;
    border-collapse: collapse;
    background: white;
  }
  
  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
  }
  
  th {
    background: #111827;
    color: white;
  }
  
  .section.mrs td { background: #e0f2fe; }
  .section.delivery td { background: #dcfce7; }
  .section.transfer td { background: #ffedd5; }
  
  .row-total {
    font-weight: bold;
    background: #facc15;
  }


  .section-header.mrs td {
    background: #2563eb;
    color: white;
    font-size: 18px;
  }
  
  .mrs-row td {
    background: #e0f2fe;
  }
  
  .mrs-row td:first-child {
    font-weight: 600;
    text-align: left;
  }
  
  
  .section-header.deliveries td {
    background: #16a34a;
    color: white;
    font-size: 18px;
  }
  
  .deliveries-row td {
    background: #e0f2fe;
  }
  
  .deliveries-row td:first-child {
    font-weight: 600;
    text-align: left;
  }


  .section-header.transfer td {
    background: #ea580c;
    color: white;
    font-size: 18px;
  }
  
  .transfer-row td {
    background: #e0f2fe;
  }
  
  .transfer-row td:first-child {
    font-weight: 600;
    text-align: left;
  }



  
