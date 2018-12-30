// Book Class: Represents a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI tasks
class UI {    
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach(function(book){
            UI.addBookToList(book);
        });
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
        `;
        list.appendChild(row);
    }

    static deleteBook(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className} text-center`;
        const textNode = document.createTextNode(message);
        div.appendChild(textNode);
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        // Vanish alert message after 2 seconds
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 2000);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// Store Class: Handles Storage
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static deleteBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {

    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    if(title === '' || author === '' || isbn === '') {
        UI.showAlert("Please fill all details", 'danger');
    } else {
        // Instantiate a book
        const book = new Book(title, author, isbn);

        // Add book to UI
        UI.addBookToList(book);

        // Add book to Store
        Store.addBook(book);

        // Show success message
        UI.showAlert('Book Added', 'success');

        // Clear Fields
        UI.clearFields();
    }
    
});

// Event: Delete a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    
    // Remove book from UI
    UI.deleteBook(e.target);

    // Remove book from Store
    Store.deleteBook(e.target.parentElement.previousElementSibling.textContent);

    // Show success message
    UI.showAlert('Book Deleted', 'success');

});