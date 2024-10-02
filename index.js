const displayShelf = document.querySelector('.displayShelf');
const addBtn = document.querySelector('.addBtn');
const modal = document.querySelector('#myModal');
const closeBtn = document.querySelector('.closeBtn');
const form = document.querySelector('#formModal');
const formSubmitButton = document.querySelector('#formSubmitButton');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const bookPages = document.querySelector('#bookPages');
const bookStatus = document.querySelector('#bookStatus');
const numberBooks = document.querySelector('.numberBooks');
const errorDialog = document.querySelector('.errorDialog');




addBtn.addEventListener('click', ()=>{
    modal.showModal();
})

addBtn.addEventListener('click', ()=>{
    addBtn.classList.add('animate');

        setTimeout(()=>{
            addBtn.classList.remove('animate')
        }, 200)
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


numberBooks.textContent = myBooks.length;

addBookToLibrary();

function getFormDetails(){
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let status = bookStatus.checked;
    
    if (myBooks.some(book => book.title === title && book.author === author)){
        errorDialog.showModal()
        setTimeout(()=>{
            errorDialog.close()
        }, 700)
        return;
    }
    let book = new Book(title, author, pages, status);


    myBooks.push(book);

    
    
   
}

formSubmitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    if(form.checkValidity()){
        getFormDetails();
        addBookToLibrary();
        
        bookTitle.value = '';
        bookAuthor.value = '';
        bookPages.value = '';
        bookStatus.checked = '';
        modal.close();

    }else{
        form.reportValidity()
    }
    
    numberBooks.textContent = myBooks.length;
    

})




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
        statusBtn.classList.add('statusBtn')
        statusBtn.textContent = 'Change status'

        statusBtn.addEventListener('click', ()=>{
            book.status = !book.status;
            statusBtn .textContent = 'Change status'
            status.textContent = `Status : ${book.status ? 'Read' : 'Yet to read'}`
        })

        
        
        const deletBtn = document.createElement('button');
        deletBtn.textContent = 'Delete'
        deletBtn.addEventListener('click', ()=>{
            let indexToBeDelted = myBooks.indexOf(book);
            myBooks.splice(indexToBeDelted, 1);
            addBookToLibrary();
           

            numberBooks.textContent = myBooks.length;
            
        })
    
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(status);
        div.appendChild(statusBtn);
        div.appendChild(deletBtn);
    
        displayShelf.appendChild(div)
    
    }
}


