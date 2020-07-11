import {observable} from "mobx";

class Book {
    @observable
    name: string = '';
}

class User {
    @observable
    name: string = '';
    books: Book[] = [];
}

class Class {
    @observable
    users: User[] = [];
}


const classObject = observable({
    users: [{
        name: '',
        books: [{
            name: ''
        }]
    }]
});

const classInstance = new Class();
