// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here

    let target = document.getElementById("target");
    target.innerHTML = tableGeneratorString(10,1);
})();


function tableGeneratorString(rows, cols) {
    let tableString = '<table>';
    for (let i = 0; i < rows ; i++) {
        tableString += '<tr>';
        for (let j = 0; j < cols; j++) {
            tableString += '<td>';
            tableString += '</td>'
        }
        tableString += '</tr>'; 
    };
    tableString += '</table>';
    return tableString;
}