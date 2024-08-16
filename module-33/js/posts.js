function loadPosts(){
    console.log('loading posts');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}


function displayPosts(posts){

    const postsContainer = document.getElementById('posts-container');
   for(const post of posts){
    
    console.log(post);
    const postDiv = document.createElement('div');
    postDiv.classList.add('post')
    postDiv.innerHTML = `
    <h4>User: ${post.userId}</h4>
    <h5>Title: ${post.title}</h5>
    <p>Description: ${post.body}</p>

    `

    postsContainer.appendChild(postDiv);
   }
}


loadPosts();