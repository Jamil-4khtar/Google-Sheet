let container = document.querySelector(".container");

// cells
for (let row = 0; row <= 100; row++) {
    let newRow = document.createElement("div");
    newRow.classList.add("rows")

    for (let col = 0; col <= 26; col++) {

        if (row == 0) { /* column head */
            let newCol = document.createElement("div")
            newCol.classList.add("columns");
            newCol.classList.add("headcells");
            newCol.innerText = String.fromCharCode(64 + col);
            // newCol.style.background = "grey"
            newRow.append(newCol);
            if (col == 0) { /* first cell empty */
                newCol.innerText = "";
            }
        }
        else { /* everything thats not column head */

            if (col == 0) {/* row head */
                let newCol = document.createElement("div")
                newCol.classList.add("columns");
                newCol.classList.add("headcells");
                newCol.innerText = row;
                // newCol.style.background = "grey"
                newRow.append(newCol);
            }
            //every editable cell
            let newCol = document.createElement("div")
            newCol.classList.add("columns");
            newCol.classList.add("editcell");
            newCol.classList.add(row + String.fromCharCode(65 + col))
            // newCol.innerText = row + String.fromCharCode(65 + col);
            newCol.contentEditable = true
            newRow.append(newCol);
            if (col == 26) { /* grid overflow contained */
                newCol.remove()
            }
        }
    }
    container.append(newRow)
}
//  Add 100 more rows ////////////////////////////
let currentRows = 100
let increment = 100
let addBtn = document.createElement("div")
addBtn.innerHTML = `<button style="color: #0b57d0; border: none">Add</button>100 more rows`;
addBtn.className = "addDiv"
document.body.append(addBtn)
addBtn.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault()
    addRows(currentRows, increment)
    currentRows += 100
    console.log("🚀 ~ window.addEventListener ~ currentRows:", currentRows)
})
///////////////////////////////////////////////////////

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
            newCol.style = "height: 25px"
            
            if (col == 0) {
                newCol.innerText = row;
                // newCol.style.background = "grey"
                newCol.classList.add("headcells");
                newRow.append(newCol);
            } else {
                // newCol.innerText = row + String.fromCharCode(64 + col);
                newCol.contentEditable = true
                newCol.classList.add("editcell");
                newCol.classList.add(row + String.fromCharCode(65 + col))

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
/////////multiple selection/////
let selectedCells = new Set();
let cells = document.querySelectorAll(".editcell")
cells.forEach(eachCell => {
    eachCell.addEventListener("click", (e) => {
        if (e.ctrlKey == false && e.metaKey == false) {
            for(let t of selectedCells) {
                t.classList.remove("selected")
            }
            selectedCells.clear();
        }
        if (selectedCells.has(e.target)) {
            e.target.classList.remove("selected")
            selectedCells.delete(e.target)
        } else {
            selectedCells.add(e.target)
            e.target.classList.add("selected")
        }
    })
})

///////bold button////////
let boldBtn = document.querySelector(".bold");
boldBtn.addEventListener("click", (e) => {
    selectedCells.forEach(c => {
        c.style.fontWeight = c.style.fontWeight == "bold"?"normal":"bold";
    })
})




