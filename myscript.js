const theLibrary = [];
let bookName = '';
let bookAuthor = '';
let bookPages = '';
let haveRead = '';
let bookCount = 0;
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
    bookCount++
    bookNumber = 'book' + bookCount
    return bookNumber;
}
const addBook = () => {
    bookInput();
    numberOfBooks();
    console.log(bookNumber)
}

