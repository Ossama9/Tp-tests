const User = require('../Entities/User');
const {ToDoList} = require("../Entities/ToDoList");

describe('ToDoList', function () {
    let user_valid;
    beforeEach(() => {
        user_valid = new User(
            "john",
            "Doe",
            "Johndoe@example.com",
            "Password1234",
            "01/01/1990",
        );
    });

    test('add a ToDoList to an user Valid', () => {
        const toDoList = new ToDoList(user_valid)
        const result = user_valid.addTodoList(toDoList)
        expect(result).toBe(true);
    });

    test('add a ToDoList to an user not valid', () => {
        const user_not_valid = user_valid
        user_not_valid.lastname = null
        const toDoList = new ToDoList(user_not_valid)
        const result = user_not_valid.addTodoList(toDoList)
        expect(result).toBe(false);
    });

    test('add a two ToDoList to an user valid', () => {
        const toDoList = new ToDoList(user_valid)
        const toDoList2 = new ToDoList(user_valid)
        user_valid.addTodoList(toDoList)
        const result = user_valid.addTodoList(toDoList2)
        expect(result).toBe(false);
    });

});