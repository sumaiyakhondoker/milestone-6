function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhoto(data))
}

function displayPhoto(datas){
    const detailsContainer = document.getElementById('picDetails-container');

    for(const data of datas){
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('designs')
        detailsDiv.innerHTML = `
     
        <h2>AlbumId:${data.albumId}</h2>
        <h3>Id: ${data.id} </h3>
        <h4>Title: ${data.title} </h4>
        <h5>URL: ${data.url} </h5>
        <h6>Thumbnail URL: ${data.thumbnailUrl}</h6>
        `
        detailsContainer.appendChild(detailsDiv);

        
        
    }
    
}
loadPhotos()