const {ToDoList} = require("./Entities/ToDoList");
const User = require("./Entities/User");
const {Item} = require("./Entities/Item");
const validUser = new User(
    "john",
    "Doe",
    "Johndoe@example.com",
    "Password1234",
    "01/01/1990",
);
const validToDoList = new ToDoList(validUser)
const validItem = new Item("test", "Ceci est une descr");


validToDoList.add(validItem)
