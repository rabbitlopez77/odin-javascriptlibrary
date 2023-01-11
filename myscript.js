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
    let createParagraph = document.createElement('p');
    let createDiv = document.createElement("div");
    let totalBookAuthors = theLibrary.map(a => a.author)
    let totalBookPages = theLibrary.map(a => a.pages);
    let totalBookRead = theLibrary.map(a => a.read)
    
    
   

    
    createParagraph.setAttribute('id', bookCount + 1000)
    createDiv.style.width = "100%";
    createDiv.style.height = "100%";
    createDiv.style.background = "red";
    createDiv.style.color = "white";
    createDiv.style.display = 'grid'
    createDiv.setAttribute('id', bookCount)
    createDiv.innerHTML = totalBooksName[bookCount];
    document.getElementById("theLibrary").appendChild(createDiv);
    createParagraph.innerHTML = totalBookAuthors[bookCount];
    document.getElementById(bookCount).appendChild(createParagraph)
    document.getElementById(bookCount).insertAdjacentHTML("beforeend", totalBookPages[bookCount])
    document.getElementById(bookCount).insertAdjacentHTML("beforeend", totalBookRead[bookCount])
    
       let createEraseButton = document.createElement('button');
    
       createEraseButton.setAttribute('id', bookCount + 'eraser');
    
    const eraseDiv = () => {
         let divErase = document.getElementById(bookCount);
        divErase.remove();
    }
       createEraseButton.addEventListener("click", eraseDiv);
       document.getElementById(bookCount).appendChild(createEraseButton);
       
     
      
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




