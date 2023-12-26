let arr = [
    [1, 2, 3, 4, 56], ["akash", "prakasha", "alok", "sourav"], [true, false]];
document.write("<table border='1px' >" + "<br>")
for (let i = 0; i <= arr.length - 1; i++) {
    document.write("<tr>" + "<br>")

    for (let j = 0; j <= arr[i].length - 1; j++) {
        document.write("<td>")

        document.write(arr[i][j] + "<br>");
        document.write("</td>");

    }
    document.write("</tr>")

}
document.write("</table>");