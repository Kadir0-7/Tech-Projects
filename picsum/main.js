

window.addEventListener('load', async () => {
  // Because there may be errors with `await`, we wrap our code in a try/catch block.
  try {
    // Await a list of image from Picsum, but limit it to 100 images
    const images = await fetch('https://picsum.photos/v2/list?limit=100');
    // Fetch will give us a response, but not usable JSON. We need to await the response's JSON.to have something to work with
    const imageData = await images.json();
    // Math.random() will return a random number between 0 and 1. We multiply it by 100 to get a number between 0 and 100, and round it down to get a number between 0 and 99.
    const number = Math.floor(Math.random() * 100);
    // Get the image at the random number's index in the imageData array
    const image = imageData[number];
    // Create an element to put everything inside
    const output = document.createElement('figure');
    // For ease of use, we set the element's innerHTML, using JavaScript template string to put in the pieces we need.
    // We need to use download_url instead of url because url points to a webpage to view the image, but we want the URL of the actual image
    output.innerHTML = `<img src="${image.download_url}" alt="${image.author}"><figcaption><p>Author: ${image.author}</p><p>ID: ${image.id}</p></figcaption>`;
    // We add the image to our page
    document.body.append(output);
  } catch (e) {
    // If there is an error, we log it to the console
    console.error(e);
  }
});
