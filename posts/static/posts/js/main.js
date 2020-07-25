// Create API Using Fetch
function createAPIView(data){
    // console.log(data)
    // URL for Create
    let url = 'http://127.0.0.1:8000/post_api/create'
    
    // Use Fetch to Post Data
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
    })
    .then(res => res.json())
    .then(data => {
        // Parse the Data
        // console.log(data)

        // Get the place for the data on the page
        let newPost = document.querySelector('#newPost')

        // Add the data to the Page
        newPost.innerHTML = `<div class="card post">
        <div class="card-header">
            <a href="detail/${data.id}"><p>${data.title}</p></a>
            <p>Written By ${data.author}</p>
        </div>
        <div class="card-body">
            <p>${data.message}</p>
            <button class="btn btn-danger jsDelete ${data.id}">Delete</button>
        </div>
    </div>`
    })
}

// Create - grab data from the UI
const createPost = document.querySelector('.jsCreate')
createPost.addEventListener('click',(e) => {
    console.log('Button clicked')

    // Get Data from Djanogo Form
    let title = document.querySelector('#id_title').value
    let author = document.querySelector('#id_author').value
    let message = document.querySelector('#id_message').value

    console.log(title, author, message)

    // Put data into an object to Serialize in the API
    data = {
        title:title,
        author:author,
        message:message
    }
    // console.data(data)
    // console.log(JSON.stringify(data))

    // Turn the object into String and call the Create API function
    createAPIView(JSON.stringify(data))
})

const posts = document.querySelectorAll('.post')

const deletePost = document.querySelectorAll('.jsDelete')
deletePost.forEach(post =>{
    post.addEventListener('click',(e) => {
    // console.dir(e.target.classList[3])
    e.target.parentNode.parentNode.remove()
    })
})