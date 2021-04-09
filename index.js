function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
function fetchRequest(){
    fetch("https://anapioficeandfire.com/api/books")
  .then(function (responce){
    return responce.JSON();
  })
  .then(function(json){
    renderBooks(json);
  })
}
  return fetchRequest;
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
