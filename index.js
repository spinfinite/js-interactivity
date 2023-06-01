console.log("Hello World")

let message = document.querySelector("#message")

const addmovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector("input")
    const movie = document.createElement("li")
    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteButton = document.createElement("Button")
    deleteButton.textContent = "X"
    movie.appendChild(deleteButton)
    document.querySelector("ul").appendChild(movie)
    inputField.value = ''
    deleteButton.addEventListener('click', deleteMovie)
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent ="Movie deleted!"
}

const crossOffMovie =(event) => {
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked")){
        message.textContent = "Movie Watched"
    } else {
        message.textContent = "Movie Added Back"
    }
}

let addButton = document.querySelector("form")


addButton.addEventListener('submit', addmovie)




