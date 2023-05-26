const {Item} = require('./Entities/Item')
const {ToDoList} = require("./Entities/ToDoList");
const User = require("./Entities/User");

//exemple Item
const item1 = new Item("new", "Ceci est une descr", "to do" )
const item2 = new Item("new2", "Ceci est une descrjh", "DONE" )
const item3 = new Item("new2", "Ceci est une descrjh", "DONE" )
const todo = new ToDoList({name:"aze1"})
todo.add((item1))
todo.add((item2))
todo.add((item3))
//console.log(todo)

const validItem = new Item("test", "Ceci est une descr", "to do" );
const validItem2 = new Item("test2", "2eme item", "to do" );

const validUser2 = new User(
    "john",
    "Doe",
    "Johndoe@example.com",
    "Password1234",
    "01/01/1990",
);
const validToDoList = new ToDoList(validUser2)

validToDoList.add(validItem2)
validToDoList.add(validItem)
console.log(validToDoList)