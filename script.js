window.onload = function() {
    const rowHeaders = document.getElementById('row-headers');
    const columnHeaders = document.getElementById('column-headers');
    const cells = document.getElementById('cells');
    
    // Generate row headers (1-100)
    for (let i = 1; i <= 100; i++) {
        const header = document.createElement('div');
        header.textContent = i;
        rowHeaders.appendChild(header);
    }
    
    // Generate column headers (A-Z)
    for (let i = 0; i < 26; i++) {
        const header = document.createElement('div');
        header.textContent = String.fromCharCode(65 + i); // 65 is the ASCII value for 'A'
        columnHeaders.appendChild(header);
    }
    
    // Generate cells
    for (let i = 0; i < 26*100; i++) {
        const cell = document.createElement('div');
        cell.contentEditable = true;
        cells.appendChild(cell);
    }
    
    // Load and save data...
    const spreadsheet = document.getElementById('spreadsheet');
    
    // Load data from local storage
    const savedData = localStorage.getItem('spreadsheet-data');
    if (savedData) {
        spreadsheet.innerHTML = savedData;
    }
    
    for (let i = 0; i < 26*100; i++) { // creates 2600 cells (100 rows, 26 columns)
        const cell = document.createElement('div');
        cell.contentEditable = true;
        spreadsheet.appendChild(cell);
    }
    
    // Save data to local storage whenever a cell is edited
    spreadsheet.addEventListener('input', function() {
        localStorage.setItem('spreadsheet-data', spreadsheet.innerHTML);
    });
}
