const theLibrary = [];
const bookFactory = (name, author, pages, read) => {
    return{name,author, pages, read}
}
const theHobbit = bookFactory('The Hobbit', 'JRR Tolkien', 150, 'Yes')

document.getElementById('theAuthor').innerHTML = theHobbit.author;
document.getElementById('theBookPages').innerHTML = theHobbit.pages;
document.getElementById('haveRead').innerHTML = theHobbit.read;

const addBook = () => {
    let bookName = document.querySelector('#bookName').value;
    let bookAuthor = document.querySelector('#bookAuthor').value;
    let bookPages = document.querySelector('#bookPages').value
    document.getElementById('theBookName').innerHTML = bookName;
}
