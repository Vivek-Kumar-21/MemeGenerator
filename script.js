// Select the button that generates a new meme
const generateMemeButton = document.querySelector(
  ".meme_generator .generate_meme_button"
);

// Select the elements where the meme image, title, and author will be displayed
const memeImage = document.querySelector(".meme_generator img");
const memeTitle = document.querySelector(".meme_generator .meme_title");
const memeAuthor = document.querySelector(".meme_generator .meme_author");

// Function to update the meme details (image, title, and author) on the page
const updateDetails = (url, title, author) => {
  // Set the image source to the URL of the meme
  memeImage.setAttribute("src", url);
  // Update the title of the meme
  memeTitle.innerHTML = title;
  // Update the author of the meme
  memeAuthor.innerHTML = `Meme by: ${author}`;
};

// Function to fetch a random meme from the API and update the page
const generateMeme = () => {
  // Fetch data from the meme API
  fetch("https://meme-api.com/gimme/memes")
    .then((response) => response.json()) // Convert the response to JSON
    .then((data) => {
      // Update the meme details using the data from the API
      updateDetails(data.url, data.title, data.author);
    });
};

// Add an event listener to the "Generate Meme" button to fetch a new meme when clicked
generateMemeButton.addEventListener("click", generateMeme);

// Generate a meme when the page first loads
generateMeme();
