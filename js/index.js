console.log("This is My Library");
// https://www.youtube.com/watch?v=l6i8RDrhcqM&list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL&index=33

// Constructor for the object 'Book'

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// // Constructor for Displaying : add some methods in it's prototype those will display the issued books in table
function DisplayTable() {


}

// Add methods to display prototype (defining functions) 
DisplayTable.prototype.add = function (book) {
    console.log("Adding new book to UI table");

    tableBody = document.getElementById("tableBody");
    // uiString will contain the row to be filled via form and documented in table
    let uiString = `<tr>                        
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        
                     </tr> `;
    tableBody.innerHTML += uiString;
}

DisplayTable.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm").reset();

}

DisplayTable.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

// Here 'type' is an obj literal below, not the variable used later in event listener code
DisplayTable.prototype.show = function (type, displayMessage) {
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert- ${type}warning alert-dismissible fade show" role="alert">
                            <strong>Message:</strong>  ${displayMessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`

    // to disappear the msg after 2s                    
    setTimeout(function () {
        message.innerHTML = " "
    }, 2000);

}


// 1.  Add event listener for "Add book" button (which is a submit button) in the form with class 'libraryForm'

let libraryForm = document.getElementById("libraryForm").addEventListener('submit', libraryFormSubmit);
// libraryForm.addEventListener('submit', libraryFormSubmit)

function libraryFormSubmit(e) {

    console.log('Your book has been added.');

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');


    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;

    }


    let book = new Book(name, author, type);
    console.log(book);

    let DT = new DisplayTable();

    if (DT.validate(book)) {
        DT.add(book);
        DT.clear();
        DT.show("success", "Your book has been added !")

    }
    else {
        DT.show("error", "Sorry this book can't be issued.")
    }



    e.preventDefault();

}


// 1. Create the object Book
// 4. Add prototypes - defining functions used later
// 2. Add event listener - entire website starts working when Add Book is clicked (submit button).
// 3. Call book before calling DisplayTable - as it's functions are taking book as a parameter.
// 5. Functions used - add, clear, validate, show (message)




