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
    bookCount++
    return bookNumber;
}
const addToLibrary = (book) => {
    theLibrary.push(book)
}
const showAllBooks = () => {
    let totalBooksName = theLibrary.map(a => a.name);
      document.getElementById('theBookName').innerHTML = totalBooksName;
    let totalBookAuthors = theLibrary.map(a => a.author)
      document.getElementById('theAuthor').innerHTML = totalBookAuthors;
    let totalBookPages = theLibrary.map(a => a.pages);
      document.getElementById('theBookPages').innerHTML = totalBookPages;
    let totalBookRead = theLibrary.map(a => a.read)
    document.getElementById('read').innerHTML = totalBookRead;
    createDiv()
}
const createDiv = () => {
    let div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.background = "red";
        div.style.color = "white";
        div.innerHTML = totalBooksName;
        document.getElementById("theLibrary").appendChild(div);
}
const addBook = () => {
    bookInput();
    numberOfBooks();
    let newBook =bookNumber;
    newBook = bookFactory(bookName, bookAuthor, bookPages, haveRead);
    addToLibrary(newBook);
    showAllBooks();



}




