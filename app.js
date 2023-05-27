const User = require("./Entities/User");
const {ToDoList} = require("./Entities/ToDoList");
const {generate_list_with_30min_interval} = require("./Utils/ItemsUtils");
const {Item} = require("./Entities/Item");
const myUser = new User(
    "john",
    "Doe",
    "Johndoe@example.com",
    "Password1234",
    "01/01/1990",
);
const myList = new ToDoList(myUser);
const listItems = generate_list_with_30min_interval(8)
// console.log(listItems)
for (const item of listItems) {
    // console.log("trest", item)
    console.log(myList.add(item))
}

// const secondItem = new Item("secondItem", "Ceci est une descr");
//     myList.add(secondItem)
