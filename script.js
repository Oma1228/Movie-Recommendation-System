
const movies = [
    {
        title: "O.I.C. Gadafi",
        genre: "Action",
        year: 2026,
        rating: 8.5,
        image: "https://taktikbook.s3.amazonaws.com/77d9093c-b75c-469a-aec6-622c594cadb5.jpg"
    },
    {
        title: "Neera",
        genre: "Drama",
        year: 2025,
        rating: 8.0,
        image: "https://jp-cineplex.s3.amazonaws.com/images/1756895861631_neera-movie-poster.jpg"
    },
    {
        title: "Rosa Adare",
        genre: "Romance",
        year: 2025,
        rating: 8.2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8MDKjJ0cTKYVn1fa5nctwu_KAmKGhj3gkg1vwgYY4Q&s=10"
    },
    {
        title: "Rani",
        genre: "Drama",
        year: 2025,
        rating: 8.5,
        image: "https://image.tmdb.org/t/p/w500/f5L67z4myhqAevj4tV381cx7yHD.jpg"
    },
    {
        title: "Govi Thaththa",
        genre: "Drama",
        year: 2025,
        rating: 7.8,
        image: "https://cdn-images.dzcdn.net/images/cover/3f1ce8f8f93d9981ab37ef3c1d39bee3/0x1900-000000-80-0-0.jpg"
    },
    {
        title: "Ice Cream",
        genre: "Thriller",
        year: 2025,
        rating: 7.5,
        image: "https://a.ltrbxd.com/resized/film-poster/1/3/0/8/2/1/3/1308213-ice-cream-2025-0-230-0-345-crop.jpg?v=a4bda5fe77"
    },
    {
        title: "Sihinayaki Adare",
        genre: "Romance",
        year: 2024,
        rating: 8.1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtf-L0tOS5_2sViNks4KVTkwmlh-esvksd14B8zO6rw&s=10"
    },
    {
        title: "Sinhabahu",
        genre: "Drama",
        year: 2024,
        rating: 8.4,
        image: "https://m.media-amazon.com/images/M/MV5BYWI5OTA0ZDktYjE3NC00NWEzLWEzY2YtNjg1YjZiYmVjZWZjXkEyXkFqcGc@._V1_.jpg"
    }
];

function displayMovies(movieList, containerId) {
    const container = document.getElementById(containerId);

    if (movieList.length === 0) {
        container.innerHTML = "<p>No movies found!</p>";
        return;
    }

    container.innerHTML = movieList.map(movie => `
        <div class="movie-card">
            <img src="${movie.image}" alt="${movie.title}">

            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>Genre: ${movie.genre}</p>
                <p>Year: ${movie.year}</p>
                <p class="rating">⭐ ${movie.rating}/10</p>
            </div>
        </div>
    `).join("");
}

function filterMovies() {
    const search = document.getElementById("searchInput")
        .value.toLowerCase();

    const genre = document.getElementById("genreFilter").value;

    const filteredMovies = movies.filter(movie => {
        return movie.title.toLowerCase().includes(search) &&
            (genre === "All" || movie.genre === genre);
    });

    displayMovies(filteredMovies, "movieContainer");
}

function recommendMovies() {
    const genre = document.getElementById("recommendGenre").value;

    if (genre === "") {
        alert("Please select a genre!");
        return;
    }

    const recommended = movies.filter(movie =>
        movie.genre === genre
    );

    displayMovies(recommended, "recommendContainer");
}

document.getElementById("searchInput")
    .addEventListener("input", filterMovies);

document.getElementById("genreFilter")
    .addEventListener("change", filterMovies);

displayMovies(movies, "movieContainer");
