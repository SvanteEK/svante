fetch("./albums.json")
.then( res => res.json())
.then(data => {
  let albumContainer = document.getElementById("albumContainer");
  let html = "<table border=1>"
html += `
  <tr>
    <th>Album</th>
    <th>Artist</th>
    <th>Tracklist</th>
    <th>Rating</th>
  </tr>
`;

  
  data.forEach(album => {
    /*let trackListHTML = "<ul class='tracklist' id='tracklist-" + index + "'>";
      album.trackList.forEach(track => {
        trackListHTML += `<li>${track.trackNumber}. ${track.trackTitle} (${track.trackTimeInSeconds}s)</li>`;
      });
      trackListHTML += "</ul>";*/
    /*let trackListHTML = "<ul class='tracklist' id='tracklist-" + index + "'>";
      album.trackList.forEach(track => {
        trackListHTML += `<li>${track.trackNumber}. ${track.trackTitle} (${track.trackTimeInSeconds}s)</li>`;
      });
      trackListHTML += "</ul>";*/
    /*let trackListHTML = "<ul class='tracklist' id='tracklist-" + index + "'>";
      album.trackList.forEach(track => {
        trackListHTML += `<li>${track.trackNumber}. ${track.trackTitle} (${track.trackTimeInSeconds}s)</li>`;
      });
      trackListHTML += "</ul>";*/
    let trackListTitles = album.trackList.map(track => track.trackTitle).join(", ");
   html += `
   <tr>
    <td>${album.albumName}</td>
    <td>${album.artistName}</td>
    <td>${trackListTitles}</td>     
    <td>${album.rating}</td>
   </tr>
   `;
    
  })
  albumContainer.innerHTML = html;
})

/* Tilføj event listeners til hver knap efter HTML er indsat
data.forEach((_, index) => {
  const button = document.getElementById(`toggle-btn-${index}`);
  button.addEventListener("click", () => toggleTracklist(index));
});


// Funktion til at vise/skjule tracklisten for et specifikt album
function toggleTracklist(index) {
let tracklist = document.getElementById(`tracklist-${index}`);
let button = document.getElementById(`toggle-btn-${index}`);

if (tracklist.style.display === "none" || tracklist.style.display === "") {
tracklist.style.display = "block";
button.textContent = "Skjul Trackliste";
} else {
tracklist.style.display = "none";
button.textContent = "Vis Trackliste";
}
}*/

/*
// Vis/skjul hele tabellen
function toggleTable() {
  let albumContainer = document.getElementById("albumContainer");
  let knap = document.getElementById("toggleKnap");
  if (albumContainer.style.display === "none") {
    albumContainer.style.display = "block";
    knap.textContent = "Skjul Albumliste";
  } else {
    albumContainer.style.display = "none";
    knap.textContent = "Vis Albumliste";
  }
}
// Vis/skjul tracklisten for et specifikt album
function toggleTracklist(index) {
  let tracklist = document.getElementById(`tracklist-${index}`);
  let button = document.getElementById(`toggle-btn-${index}`);

  if (tracklist.style.display === "none" || tracklist.style.display === "") {
    tracklist.style.display = "block";
    button.textContent = "Skjul Trackliste";
  } else {
    tracklist.style.display = "none";
    button.textContent = "Vis Trackliste";
  }
}
*/
