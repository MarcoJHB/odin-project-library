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
  },
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

  const bookDetails = document.createElement("div");
  bookDetails.classList.add("book-details");
  const bookCover = document.createElement("img");
  const bookCoverURL = myLibrary[i].url;
  bookCover.src = bookCoverURL;
  bookDetails.appendChild(bookCover);
  console.log("cover created!");

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

// const addBookBtn = document.querySelector(".add-book");

// addBookBtn.addEventListener("click", bookInfo)

function bookInfo() {
  let newTitle = prompt("Book Name");
  let newUrl = prompt("URL");
  let newAuthor = prompt("Author");
  let newPages = prompt("page");
  let newRead = prompt("Read?");
  let newBook = new Book(newTitle, newUrl, newAuthor, newPages, newRead);
  addBookToLibrary(newBook);
  return newTitle, newUrl, newAuthor, newPages, newRead, newBook;
}

// Search for title

const form = document.querySelector("#searchForm");
// add async to make it await
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const readStatus = form.elements.readStatus.value;
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://www.googleapis.com/books/v1/volumes`, config);
  const container = document.querySelector(".container");
  container.innerHTML = "";
  console.log("JSON data from API ==>", res.data.items[0].volumeInfo.title);
  console.log(readStatus);
  makeImages(res.data, readStatus);
  form.elements.query.value = "";
});

// const makeImages = (books) => {
//     // create for of loop to find every result
//     for (let i = 0; i < 1; i++) {
//             let img = document.createElement('IMG');
//             let bookTitle = document.createElement('P');
//             bookTitle = books.items[i].volumeInfo.title;
//             img.src = books.items[i].volumeInfo.imageLinks.thumbnail;
//             let container = document.querySelector(".container");
//             container.append(img);
//             container.append(bookTitle);
//     }
// }

const makeImages = (books, readStatus) => {
  // create for of loop to find every result
  for (let i = 0; i < 1; i++) {
    let bookTitle = document.createElement("div");
    bookTitle.textContent = books.items[i].volumeInfo.title;
    bookTitle.classList.add("book-title");

    const bookContainer = document.querySelector(".book-container");
    const card = document.createElement("div");
    card.classList.add("card");
    bookContainer.appendChild(card);
    console.log("card created!");

    const bookDetails = document.createElement("div");
    bookDetails.classList.add("book-details");

    let bookCover = document.createElement("img");
    bookCover.src = books.items[i].volumeInfo.imageLinks.thumbnail;
    bookCover.style.width = "100%";
    bookDetails.appendChild(bookCover);
    console.log("cover created!");
    card.appendChild(bookDetails);
    bookDetails.appendChild(bookTitle);
    console.log("details created!");

    let bookAuthor = document.createElement("p");
    let bookAuthorName = books.items[i].volumeInfo.authors;
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = bookAuthorName;
    bookDetails.appendChild(bookAuthor);

    let readStatusContainer = document.createElement("div");
    readStatusContainer.classList.add("read-status-container");
    card.appendChild(readStatusContainer);

    let readStatusSpan = document.createElement("span");
    readStatusSpan.classList.add("read-status");
    readStatusSpan.textContent = readStatus;
    console.log(readStatus);
    readStatusContainer.appendChild(readStatusSpan);
  }
};

// let newBook = new Book(newTitle,newUrl,newAuthor,newPages,newRead)

// function addBookToLibrary(newBook) {
//   const bookTitle = document.createElement("div");
//   bookTitle.textContent = newBook.title;
//   bookTitle.classList.add("book-title");

//   const bookContainer = document.querySelector(".book-container");
//   const card = document.createElement("div");
//   card.classList.add("card");
//   bookContainer.appendChild(card);
//   console.log("card created!");

//   const bookCover = document.createElement("img");
//   const bookCoverURL = newBook.url;
//   bookCover.src = bookCoverURL;
//   card.appendChild(bookCover);
//   console.log("cover created!");

//   const bookDetails = document.createElement("div");
//   bookDetails.classList.add("book-details");
//   card.appendChild(bookDetails);
//   bookDetails.appendChild(bookTitle);
//   console.log("details created!");

//   const bookAuthor = document.createElement("p");
//   const bookAuthorName = newBook.author;
//   bookAuthor.classList.add("book-author");
//   bookAuthor.textContent = bookAuthorName;
//   bookDetails.appendChild(bookAuthor);

//   const readStatusContainer = document.createElement("div");
//   readStatusContainer.classList.add("read-status-container");
//   card.appendChild(readStatusContainer);

//   const readStatus = document.createElement("span");
//   readStatus.classList.add("read-status");
//   const readStatusCurrent = newBook.read;
//   readStatus.textContent = readStatusCurrent;
//   console.log(readStatusCurrent);
//   readStatusContainer.appendChild(readStatus);
// }
