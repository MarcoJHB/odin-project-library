let myLibrary = [
  {
    title: "Catch 22",
    url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1463157317l/168668.jpg",
    author: "JK Rowling",
    pages: "234",
    read: "not read yet",
  },
  {
    title: "The Catcher in the Rye",
    url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107.jpg",
    author: "J.D. Salinger",
    pages: "466",
    read: "not read yet",
  },
];

function Book(title, author, pages, read) {
  // constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}



addBookToLibrary();



// Creating a new card

const bookContainer = document.querySelector(".book-container");
const card = document.createElement("div");
card.classList.add("card");
bookContainer.appendChild(card);

// Add book cover image

const bookCover = document.createElement("img");
bookCover.src = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1383718290l/13079982.jpg";
card.appendChild(bookCover);

// Add book details

const bookDetails = document.createElement("div");
bookDetails.classList.add("book-details");
card.appendChild(bookDetails);

const bookTitle = document.createElement("div");

bookTitle.classList.add("book-title");
bookTitle.textContent = "Fahrenheit 451";
bookDetails.appendChild(bookTitle);

const bookAuthor = document.createElement("p");
bookAuthor.classList.add("book-author");
bookAuthor.textContent = "Sam Sparrow";
bookDetails.appendChild(bookAuthor);

// Populate the library

// For each book in the library, create a card and populate it

function getTitle() {
  return books.map((x) => x["title"]);
}

for (let i= 0; i < myLibrary.length; i++) {
  function addBookToLibrary() {
    const bookName = myLibrary[i-1].title;
    // console.log(myLibrary.map((x) => x["title"]));
    return bookName;
  }

  const bookTitle = document.createElement("div");
  bookTitle.textContent = bookName;
  bookTitle.classList.add("book-title");
  bookDetails.appendChild(bookTitle);
  
}

// return books.map(x => x['title']);
