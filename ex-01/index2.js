// Henter data fra albums.json (en lokal fil med album-information)
fetch("./albums.json")
  .then(res => res.json()) // Konverterer svaret fra JSON-format til et JavaScript-objekt
  .then(data => {
    // Finder HTML-elementet hvor album skal indsættes
    let albumContainer = document.getElementById("albumContainer");
    let html = ""; // Tom HTML-streng som skal opbygges

    // Gennemgår hvert album i JSON-dataen
    data.forEach((album, index) => {
      // Opretter ID'er til hver trackliste og knap 
      const trackListId = `tracklist-${index}`;
      const buttonId = `toggleBtn-${index}`;

      // Bygger tracklisten som en <ul>-liste
      let trackListHTML = `<ul id="${trackListId}" style="display:none; padding-left: 20px;">`
      album.trackList.forEach(track => {
        trackListHTML += `<li>${track.trackTitle}</li>`; // Tilføjer hvert track som <li>
      });
      trackListHTML += "</ul>"; // Afslutter listen

      // Bygger HTML for albums
      html += `
        <div class="album-card">
          <h2>${album.albumName}</h2>
          <p><strong>Artist:</strong> ${album.artistName}</p>
          <p><strong>Rating:</strong> ${album.rating}</p>
          <button id="${buttonId}" onclick="toggleTracklist('${trackListId}', '${buttonId}')">Vis trackliste</button>
          ${trackListHTML} 
        </div>
      `;
    });

    // Indsætter alt den genererede HTML i DOM'en
    albumContainer.innerHTML = html;
  });

// Funktion der viser/skjuler tracklisten og ændrer teksten på knappen
function toggleTracklist(listId, buttonId) {
  const listEl = document.getElementById(listId);     // Finder tracklist-elementet
  const buttonEl = document.getElementById(buttonId); // Finder den tilhørende knap

  const isHidden = listEl.style.display === "none";   // Tjekker om tracklisten er skjult
  listEl.style.display = isHidden ? "block" : "none"; // Skifter visning (vis/skjul)
  buttonEl.textContent = isHidden ? "Skjul" : "Vis";  // Opdaterer knaptekst
}