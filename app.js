const {Item} = require('./Entities/Item')
const {ToDoList} = require("./Entities/ToDoList");
const User = require("./Entities/User");

//exemple Item
const item1 = new Item("new", "Ceci est une descr", "to do" )
const item2 = new Item("new2", "Ceci est une descrjh", "DONE" )
const item3 = new Item("new2", "Ceci est une descrjh", "DONE" )
const todo = new ToDoList({name:"aze1"})

const user = new User(
    "john",
    "Doe",
    "Johndoe@example.com",
    "Password1234",
    "01/01/1990",
);
const toDoList = new ToDoList(user)
toDoList.add(item1)
toDoList.add(item2)
toDoList.add(item3)
console.log(user.addTodoList(toDoList))
console.log(user)

