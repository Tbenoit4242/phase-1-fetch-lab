function fetchBooks() {
  // Make the fetch request and return the promise
  return fetch("https://anapioficeandfire.com/api/books")
    .then(function(response) {
      return response.json(); // Parse JSON from the response
    })
    .then(function(data) {
      renderBooks(data); // Call renderBooks with the parsed data
    })
    .catch(function(error) {
      console.error('Error fetching data:', error);
      // Handle errors here if necessary
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name; // Use textContent instead of innerHTML for security
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(); // Call fetchBooks when DOM content is loaded
});