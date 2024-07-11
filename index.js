document.addEventListener('DOMContentLoaded', function() {
    // Target the paragraph element with id="text"
    const paragraph = document.getElementById('text');

    // Replace the text content of the paragraph
    if (paragraph) {
        paragraph.textContent = "This is really cool!";
    }
});
