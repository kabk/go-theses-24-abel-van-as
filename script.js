// Functie om tekst te tonen/verbergen
function toggleText(id, text) {
  var demoElement = document.getElementById(id);
  if (demoElement.innerHTML !== "") {
      // Als de tekst al is ingesteld, verwijder deze dan
      demoElement.innerHTML = "";
  } else {
      // Als de tekst nog niet is ingesteld, stel deze dan in
      demoElement.innerHTML = text;
  }
}

window.addEventListener('scroll', function() {
  const headings = document.querySelectorAll('h3[id]');

  headings.forEach((currentHeading, index) => {
    const nextHeading = headings[index + 1];
    
    if (nextHeading || index === headings.length - 1) { // Controleer of het de laatste <h3> is
      const currentRect = currentHeading.getBoundingClientRect();
      const nextRect = nextHeading ? nextHeading.getBoundingClientRect() : null;

      if (nextRect && nextRect.top <= 0) {
        currentHeading.style.position = 'static';
      } else {
        currentHeading.style.position = 'sticky';
        currentHeading.style.top = 0;
      }
    }
  });
});

