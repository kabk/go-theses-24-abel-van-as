function toggleText(id) {
  var demoElement = document.getElementById(id);
  if (demoElement.innerHTML !== "") {
    // Als de tekst al is ingesteld, verwijder deze dan
    demoElement.innerHTML = "";
  } else {
    // Als de tekst nog niet is ingesteld, stel deze dan in
    var text = id.replace("demo", "");
    demoElement.innerHTML = text;
  }
}
