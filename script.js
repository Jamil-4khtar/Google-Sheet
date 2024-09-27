let container = document.querySelector(".container");

// cells
for (let row = 0; row <= 100; row++) {
    let newRow = document.createElement("div");
    newRow.classList.add("rows")

    for (let col = 0; col <= 26; col++) {
        
        if (row == 0) { /* column head */
            let newCol = document.createElement("div")
            newCol.classList.add("columns");
            newCol.innerText = String.fromCharCode(64+col);
            newCol.style.background = "grey"
            newRow.append(newCol);
            if (col == 0) { /* first cell empty */
                newCol.innerText = "";
            }
        }
        else { /* everything thats not column head */
            
            if (col == 0) {/* row head */
                let newCol = document.createElement("div")
                newCol.classList.add("columns");
                newCol.innerText = row;
                newCol.style.background = "grey"
                newRow.append(newCol);
            }
            //every editable cell
            let newCol = document.createElement("div")
            newCol.classList.add("columns");
            newCol.innerText = row + String.fromCharCode(65+col);
            newRow.append(newCol);
            if (col == 26) { /* grid overflow contained */
                newCol.remove()
            }
        }
    }
    container.append(newRow)
}

function addRows(currentRows, increment) {
    let container = document.querySelector(".container");

    // Calculate the new number of rows
    let newRows = currentRows + increment;

    // Loop from currentRows to newRows
    for (let row = currentRows + 1; row <= newRows; row++) {
        let newRow = document.createElement("div");
        newRow.classList.add("rows");

        for (let col = 0; col <= 26; col++) {
            let newCol = document.createElement("div")
            newCol.classList.add("columns");

            if (col == 0) {
                newCol.innerText = row;
                newCol.style.background = "grey"
                newRow.append(newCol);
            } else {
                newCol.innerText = row + String.fromCharCode(64+col);
                newRow.append(newCol);
                // if (col == 26) {
                //     newCol.remove()
                // }
            }
        }
        container.append(newRow)
    }
    return newRows; // return the updated row count
}
addRows(100, 50)