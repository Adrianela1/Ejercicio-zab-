// Function to prompt the user for input
function getUserInput(promptMessage) {
    return prompt(promptMessage);
}

// Function to display user information in the console
function displayUserInfo(username, age, favoriteMovies) {
    console.log(`Username: ${username}`);
    console.log(`Age: ${age}`);
    console.log("Favorite Movies:");
    
    // Display each favorite movie with a personalized message
    favoriteMovies.forEach(movie => {
        console.log(`  - The film ${movie} is one of my favorites`);
    });
}

// Prompt the user for their data
const username = getUserInput("Enter your username:");
const age = getUserInput("Enter your age:");

// Prompt the user for their favorite movies as a comma-separated list
const favoriteMoviesInput = getUserInput("Enter your favorite movies (comma-separated):");

// Split the input into an array of favorite movies
const favoriteMovies = favoriteMoviesInput.split(",").map(movie => movie.trim());

// Display the user information in the console
displayUserInfo(username, age, favoriteMovies);
