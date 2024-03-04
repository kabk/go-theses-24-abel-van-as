document.addEventListener("DOMContentLoaded", function () {
    var paragraphs = document.querySelectorAll(".body-text");

    paragraphs.forEach(function (paragraph) {
        var words = paragraph.innerHTML.split(" ");
        var newContent = "";
        var wordsPerLine = 10;

        for (var i = 0; i < words.length; i++) {
            if (i > 0 && i % wordsPerLine === 0) {
                newContent += "<br>";
            }
            newContent += words[i] + " ";
        }

        paragraph.innerHTML = newContent.trim();
    });
});
