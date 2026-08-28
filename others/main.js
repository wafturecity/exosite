function copyrightreplace() {
    document.getElementById("copyright-year").innerHTML = new Date().getFullYear(); // replaces the copyright text with the current year
    console.log("bnanaa")
}

// thank you stackoverflow
function LoadFile() {
    var oFrame = document.getElementById("frmFile");
    var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
    while (strRawContents.indexOf("\r") >= 0)
        strRawContents = strRawContents.replace("\r", "");
    var arrLines = strRawContents.split("\n");
    // alert("File " + oFrame.src + " has " + arrLines.length + " lines");
    for (var i = 0; i < arrLines.length; i++) {
        var curLine = arrLines[i];
        // alert("Line #" + (i + 1) + " is: '" + curLine + "'");
        console.log(curLine);
        document.getElementById("visitor-value").innerHTML = curLine;
    }
}


document.onload = copyrightreplace()

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))