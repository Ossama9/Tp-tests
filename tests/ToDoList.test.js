const ToDoList = require('../Entities/ToDoList');
const User = require('../Entities/User');
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
        console.log(result)
    });
});