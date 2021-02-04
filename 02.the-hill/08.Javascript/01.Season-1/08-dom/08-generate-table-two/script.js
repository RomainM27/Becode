// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here
    let target = document.getElementById("target");
    target.innerHTML = tableGeneratorString(10,10);

})();
function tableGeneratorString(rows, cols) {
    let tableString = '<table>';
    for (let i = 0; i < rows ; i++) {
        tableString += '<tr>';
        for (let j = 0; j < cols; j++) {
            tableString += '<td>';
            multipliTable = (i+1) * (j+1);
            tableString += multipliTable;
            tableString += '</td>';
        }
        tableString += '</tr>'; 
    };
    tableString += '</table>';
    return tableString;
}

/* 
let table = document.createElement("table");
    table.setAttribute("id", "myTable");
    document.getElementById("target").appendChild(table);

    for (let i = 0; i < 10; i++) {
        let row = document.createElement("tr");
        document.getElementById("myTable").appendChild(row);

        for (let j = 0; j < 10; j++) {
            let cols = document.createElement("td");
            let text = document.createTextNode((i + 1) * (j + 1));
            cols.appendChild(text);
            row.appendChild(cols);
        }
    }

*/
