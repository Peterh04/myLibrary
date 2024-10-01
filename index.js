const displayShelf = document.querySelector('.displayShelf');
const addBtn = document.querySelector('.addBtn');
const modal = document.querySelector('#myModal');
const closeBtn = document.querySelector('.closeBtn');
const form = document.querySelector('#formModal');
const formSubmitButton = document.querySelector('#formSubmitButton');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const bookPages = document.querySelector('#bookPages');
const bookStatus = document.querySelector('#bookStatus')


addBtn.addEventListener('click', ()=>{
    modal.showModal();
})


closeBtn.addEventListener('click', ()=>{
   modal.close();
})

const myBooks = [];


function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


const book1 = new Book('Rich Dad Poor Dad', 'Robert Kiyosaki', 200, true)
const book2 = new Book('Manifest: 7 steps', 'Roxie Nafousi', 250, false)
const book3  = new Book('Pride and Prejudice', 'Jane Austin', 300, false);




myBooks.push(book1);
myBooks.push(book2);
myBooks.push(book3);

addBookToLibrary();






function addBookToLibrary() {

    displayShelf.innerHTML = ''
    
    for(let book of myBooks){
        const div = document.createElement('div');
        div.classList.add('book')
    
        const title = document.createElement('h2');
        title.textContent = `Title : ${book.title}`
    
        const author = document.createElement('h4');
        author.textContent = `Author : ${book.author}`
    
        const pages = document.createElement('p');
        pages.textContent = `Pages : ${book.pages}`
    
        const status = document.createElement('p')
        status.textContent = `Status : ${book.status ? 'Read' : 'Not read'}`

        
        const statusBtn = document.createElement('button');
        statusBtn.textContent = 'Change status'

 
        
        
        const deletBtn = document.createElement('button');
        deletBtn.textContent = 'Delete'
     
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(status);
        div.appendChild(statusBtn);
        div.appendChild(deletBtn);
    
        displayShelf.appendChild(div)
    
    }
}


