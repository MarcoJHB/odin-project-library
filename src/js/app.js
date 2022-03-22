let myLibrary = [
  {
    title: "Catch 22",
    url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1463157317l/168668.jpg",
    author: "JK Rowling",
    pages: "234 pages",
    read: "not read yet",
  },
  {
    title: "The Catcher in the Rye",
    url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107.jpg",
    author: "J.D. Salinger",
    pages: "466 pages",
    read: "not read yet",
  },
  {
    title: "Kafka on the Shore",
    url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1429638085l/4929.jpg",
    author: "Haruki Murakami",
    pages: "467 pages",
    read: "read",
  }
];

function Book(title, url, author, pages, read) {
  // constructor...
  this.title = title;
  this.url = url;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


// Populate the library

// For each book in the library, create a card and populate it

for (let i = 0; i < myLibrary.length; i++) {
  console.log("This is almost working!");
  const bookName = myLibrary[i].title;
  console.log(bookName);
  const bookTitle = document.createElement("div");
  bookTitle.textContent = bookName;
  bookTitle.classList.add("book-title");

  const bookContainer = document.querySelector(".book-container");
  const card = document.createElement("div");
  card.classList.add("card");
  bookContainer.appendChild(card);
  console.log("card created!");

  const bookCover = document.createElement("img");
  const bookCoverURL = myLibrary[i].url;
  bookCover.src = bookCoverURL;
  card.appendChild(bookCover);
  console.log("cover created!");

  const bookDetails = document.createElement("div");
  bookDetails.classList.add("book-details");
  card.appendChild(bookDetails);
  bookDetails.appendChild(bookTitle);
  console.log("details created!");

  const bookAuthor = document.createElement("p");
  const bookAuthorName = myLibrary[i].author;
  bookAuthor.classList.add("book-author");
  bookAuthor.textContent = bookAuthorName;
  bookDetails.appendChild(bookAuthor);

  const readStatusContainer = document.createElement("div");
  readStatusContainer.classList.add("read-status-container");
  card.appendChild(readStatusContainer);

  const readStatus = document.createElement("span");
  readStatus.classList.add("read-status");
  const readStatusCurrent = myLibrary[i].read;
  readStatus.textContent = readStatusCurrent;
  console.log(readStatusCurrent);
  readStatusContainer.appendChild(readStatus);

  // const bookTitle = document.createElement("div");
  // bookTitle.classList.add("book-title");
  // bookTitle.textContent = "Fahrenheit 451";
  // bookDetails.appendChild(bookTitle);

  console.log("This is working!");
}

const addBookBtn = document.querySelector(".add-book");

addBookBtn.addEventListener("click", bookInfo)

function bookInfo() {
  let newTitle = prompt("Book Name");
  let newUrl = prompt("URL");
  let newAuthor = prompt("Author");
  let newPages = prompt("page");
  let newRead = prompt("Read?");
  let newBook = new Book(newTitle,newUrl,newAuthor,newPages,newRead)
addBookToLibrary(newBook);
  return newTitle,newUrl,newAuthor,newPages,newRead, newBook
}

// console.log(newTitle);

// let newBook = new Book(newTitle,newUrl,newAuthor,newPages,newRead)


function addBookToLibrary(newBook) {
  const bookTitle = document.createElement("div");
  bookTitle.textContent = newBook.title;
  bookTitle.classList.add("book-title");

  const bookContainer = document.querySelector(".book-container");
  const card = document.createElement("div");
  card.classList.add("card");
  bookContainer.appendChild(card);
  console.log("card created!");

  const bookCover = document.createElement("img");
  const bookCoverURL = newBook.url;
  bookCover.src = bookCoverURL;
  card.appendChild(bookCover);
  console.log("cover created!");

  const bookDetails = document.createElement("div");
  bookDetails.classList.add("book-details");
  card.appendChild(bookDetails);
  bookDetails.appendChild(bookTitle);
  console.log("details created!");

  const bookAuthor = document.createElement("p");
  const bookAuthorName = newBook.author;
  bookAuthor.classList.add("book-author");
  bookAuthor.textContent = bookAuthorName;
  bookDetails.appendChild(bookAuthor);

  const readStatusContainer = document.createElement("div");
  readStatusContainer.classList.add("read-status-container");
  card.appendChild(readStatusContainer);

  const readStatus = document.createElement("span");
  readStatus.classList.add("read-status");
  const readStatusCurrent = newBook.read;
  readStatus.textContent = readStatusCurrent;
  console.log(readStatusCurrent);
  readStatusContainer.appendChild(readStatus);
}





// Add book details

// function addDetails() {
//   const bookDetails = document.createElement("div");
//   bookDetails.classList.add("book-details");
//   card.appendChild(bookDetails);
//   console.log("details created!")
// }

// function addTitle(bookName) {
//   const bookTitle = document.createElement("div");
//   bookTitle.classList.add("book-title");
//   bookTitle.textContent = "Fahrenheit 451";
//   bookDetails.appendChild(bookTitle);
// }

// function addAuthor(author) {
//   const bookAuthor = document.createElement("p");
//   bookAuthor.classList.add("book-author");
//   bookAuthor.textContent = "Sam Sparrow";
//   bookDetails.appendChild(bookAuthor);
// }

// return books.map(x => x['title']);

// addBookToLibrary
