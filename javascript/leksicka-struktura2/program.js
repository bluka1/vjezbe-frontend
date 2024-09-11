var rows = prompt('How many rows for your multiplication table?');
var cols = prompt('How many columns for your multiplication table?');

if (rows == '' || rows == null) rows = 10;
if (cols == '' || cols == null) cols = 2;

createTable(rows, cols);

/* Create table
 *  @author John Doe
 */

function createTable(rowCount, colCount) {
    var j = 1;
    var returnBlock =
        "<table border='1' width='500' cellspacing='0' cellpadding='5'>";

    for (i = 1; i <= rowCount; i++) {
        returnBlock = returnBlock + '<tr>';
        while (j <= colCount) {
            returnBlock = returnBlock + '<td>' + i * j + '</td>';
            j = j + 1;
        }
        returnBlock = returnBlock + '</tr>';
        j = 1;
    }

    returnBlock = returnBlock + '</table>';
    document.write(returnBlock);
}
