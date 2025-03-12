fetch("./albums.json")
.then( res => res.json())
.then(data => {
  let albumContainer = document.getElementById("albumContainer");
  let html = "<table border=1>"
html += `
  <tr>
    <th>Album</th>
    <th>Artist</th>
    <th>Rating</th>
  </tr>
`;

  
  data.forEach(album => {
   html += `
   <tr>
    <td>${album.albumName}</td>
    <td>${album.artistName}</td>
    <td>${album.rating}</td>
   </tr>
   `;
    
  })
  albumContainer.innerHTML = html;
})

