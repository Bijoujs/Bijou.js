/*global document */
<<<<<<< HEAD
(function() {
    var source = document.getElementsByClassName('prettyprint source linenums');
    var i = 0;
    var lineNumber = 0;
    var lineId;
    var lines;
    var totalLines;
    var anchorHash;
=======
(() => {
    const source = document.getElementsByClassName('prettyprint source linenums');
    let i = 0;
    let lineNumber = 0;
    let lineId;
    let lines;
    let totalLines;
    let anchorHash;
>>>>>>> 968284b781ff9faa6cf44b4bdd395f0abe09b88b

    if (source && source[0]) {
        anchorHash = document.location.hash.substring(1);
        lines = source[0].getElementsByTagName('li');
        totalLines = lines.length;

        for (; i < totalLines; i++) {
            lineNumber++;
<<<<<<< HEAD
            lineId = 'line' + lineNumber;
=======
            lineId = `line${lineNumber}`;
>>>>>>> 968284b781ff9faa6cf44b4bdd395f0abe09b88b
            lines[i].id = lineId;
            if (lineId === anchorHash) {
                lines[i].className += ' selected';
            }
        }
    }
})();
