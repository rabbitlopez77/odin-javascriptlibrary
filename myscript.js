const theLibrary = [];
let bookName = '';
let bookAuthor = '';
let bookPages = '';
let haveRead = '';
let bookCount = 0;
let bookNumber = ''

const bookFactory = (name, author, pages, read) => {
    return{name,author, pages, read}
}
const bookInput = () => {
    bookName = document.querySelector('#bookName').value
    document.querySelector('#bookName').value = '';
  bookAuthor = document.querySelector('#bookAuthor').value
    document.querySelector('#bookAuthor').value = '';
  bookPages = document.querySelector('#bookPages').value
    document.querySelector('#bookPages').value = '';
  if(document.getElementById('haveRead').checked == true) {   
      haveRead = 'I Have Read This';   
      } else {  
      haveRead = 'I Have Not Read';   
      } 
}
const numberOfBooks= () => {
    bookNumber = 'book' + bookCount
    return bookNumber;
}
const addToLibrary = (book) => {
    theLibrary.push(book)
}
const showAllBooks = () => {
    let totalBooksName = theLibrary.map(a => a.name);
    let para = document.createElement('p');
    para.setAttribute('id', bookCount + 1000)
    let div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.background = "red";
    div.style.color = "white";
    div.style.display = 'grid'
    div.setAttribute('id', bookCount)
    div.innerHTML = totalBooksName[bookCount];
    document.getElementById("theLibrary").appendChild(div);
    let totalBookAuthors = theLibrary.map(a => a.author)
    para.innerHTML = totalBookAuthors[bookCount];
    document.getElementById(bookCount).appendChild(para)
    let totalBookPages = theLibrary.map(a => a.pages);
    document.getElementById(bookCount).insertAdjacentHTML("beforeend", totalBookPages[bookCount])
    let totalBookRead = theLibrary.map(a => a.read)
    document.getElementById(bookCount).insertAdjacentHTML("beforeend", totalBookRead[bookCount])

    
}

const addBook = () => {
    bookInput();
    numberOfBooks();
    let newBook =bookNumber;
    newBook = bookFactory(bookName, bookAuthor, bookPages, haveRead);
    addToLibrary(newBook);
    showAllBooks();
    bookCount++



}




