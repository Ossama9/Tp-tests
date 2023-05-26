const {Item} = require('../Entities/Item')
const {ToDoList} = require('../Entities/ToDoList')
const User = require('../Entities/User');

describe('Item', () => {
    const validItem = new Item("test", "Ceci est une descr", "to do" );
    const secondItem = new Item("secondItem", "Ceci est une descr", "to do" );

    const validUser = new User(
        "john",
        "Doe",
        "Johndoe@example.com",
        "Password1234",
        "01/01/1990",
    );
    const validToDoList = new ToDoList(validUser)

    test('if one property is empty', () => {
        const item = new Item("", "Ceci est une descr", "to do" )
        expect(item.isValidItem()).toBe(false);
    });

    test('if name length is less than 1000', () => {
        const item = new Item("What is Lorem Ipsum?\n" +
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n" +
            "\n" +
            "Why do we use it?\n" +
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n" +
            "\n", "Ceci est une descr", "to do" )
        //item.name.length = 1230 (log it if you want to check)
        expect(item.isValidItem()).toBe(false);
    });

    test('is Valid item', () => {
        expect(validItem.isValidItem()).toBe(true);
    });

    //Vérifier qu'un item valide peut être ajouté à une ToDoList existante
    test('A valid item can be added to a ToDoList', () => {
        expect(validToDoList.add(validItem)).toBe(true);
    });

    // Vérifier qu'un item ne peut pas être ajouté à une ToDoList si l'utilisateur n'est pas valide. (1 cas)
    test('Cant add a new Item 30 minutes before the last adding', () => {
        const myUser = new User(
            "john",
            "Doe",
            "Johndoe@example.com",
            "Password1234",
            "01/01/1990",
        );
        const myList = new ToDoList(myUser);
        expect(myList.add(validItem)).toBe(true);
        expect(myList.add(secondItem)).toBe(false);
    });

    //Vérifier qu'un item ne peut pas être ajouté à une ToDoList si la période de 30 minutes entre deux items n'est pas respectée. (1 cas)
    test('Check if a user is valid before adding an Item', () => {
        const myUser = new User(
            "john",
            "Doe",
            "Johndoeexample.com",
            "Password1234",
            "01/01/1990",
        );
        const myList = new ToDoList(myUser);
        expect(myList.add(secondItem)).toBe(true);
    });
});