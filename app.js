const {Item} = require('./Entities/Item')
const {ToDoList} = require("./Entities/ToDoList");

//exemple Item
const item1 = new Item("new", "Ceci est une descr", "to do" )
const item2 = new Item("new2", "Ceci est une descrjh", "DONE" )
const item3 = new Item("new2", "Ceci est une descrjh", "DONE" )
const todo = new ToDoList({name:"aze1"})
todo.add((item1))
todo.add((item2))
todo.add((item3))
console.log(todo)