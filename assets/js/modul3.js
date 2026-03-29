// 'use strict';

// function isValidTodo(str) {
//     str.test(/^.{3,}$/);
//     str.test(/^\s*$/);
// }

////////////

// //Class
// class Cone {
//     constructor (firstName, lastName, age) {
//         this.firstName = firstName,
//         this.lastName = lastName,
//         this.age = age
//     }
// }
// const userCone1 = new Cone ('Dani', 'Alves', 30);
// console.log(userCone1);

// /////

// class Ctwo extends Cone {
//     constructor (firstName, age, job) {
//        super (firstName, age)
//        this.job = job
//     }
// }
// const userCtwo1 = new Ctwo ('Andrew', 28, 'teacher');
// console.log(userCtwo1);

// /////////////

// //Map
// const map1 = new Map ([
//     [1, 'one'],
//     [2, 'two'],
//     [3, 'three'],
// ])
// console.log(map1);

// //////////

// //Set
// const set1 = new Set ([1,2,3,3,4,2,5,6,7,'r','t','r']);
// console.log(set1);

// ////////////

// const ram = document.querySelector('h2');
// const ram1 = ram.dataset.name;
// console.log(ram1);

// ///////////

// function st1 (e) {
//     console.log(4);
//     console.log(5);
// };

// setTimeout (st1, 2000);
// // setInterval (st1, 2000);

// /////////

// // strinify - в JSON;
// // parse - в JSobject;

////////////////////////////////////////////


class Todo {

    #text;

    constructor (text) {
        this.text = text
    }
    
    print () {
        console.log(this.#text);
    }

    set text(value) {
        if (value.trim() === '') {
            throw new Error ('Пустая строка!');
        }
        this.#text = value;
    };
    
    get text() {
        return this.#text;
    }
    
    static isLong (todo) {
    return todo.text.length > 10;
    }
};



const todo = new Todo ('rawesfwefwesfwfefdb');

todo.print();

console.log(Todo.isLong(todo));