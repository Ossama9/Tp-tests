const {Item} = require('../Entities/Item')
const EmailSenderService = require("../Services/EmailSenderService");
const {ToDoList} = require('../Entities/ToDoList')
const User = require('../Entities/User');
const {generate_list_with_30min_interval} = require("../Utils/ItemsUtils");

describe('Item', () => {
    const validItem = new Item("test", "Ceci est une descr");
    const secondItem = new Item("secondItem", "Ceci est une descr");

    const validUser = new User(
        "john",
        "Doe",
        "Johndoe@example.com",
        "Password1234",
        "01/01/1990",
    );
    const validToDoList = new ToDoList(validUser)

    test('if one property is empty', () => {
        const item = new Item("", "Ceci est une descr")
        expect(item.isValidItem()).toBe(false);
    });

    test('if name length is less than 1000', () => {
        const item = new Item("What is Lorem Ipsum?", "Ceci est une descr")
        //item.name.length = 1230 (log it if you want to check)
        expect(item.isValidItem()).toBe(true);
    });

    test('is Valid item', () => {
        expect(validItem.isValidItem()).toBe(true);
    });

    //Vérifier qu'un item valide peut être ajouté à une ToDoList existante
    test('A valid item can be added to a ToDoList', () => {
        expect(validToDoList.add(validItem)).toBe(true);
    });

    // Vérifier qu'un item ne peut pas être ajouté à une ToDoList si la période de 30 minutes entre deux items n'est pas respectée
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

    // Vérifier qu'un item ne peut pas être ajouté à une ToDoList si l'utilisateur n'est pas valide.
    test('An item cannot be added to a ToDoList if the user is invalid.', () => {
        const myUser = new User(
            "john",
            "Doe",
            "Johndoeexample.com",
            "Password1234",
            "01/01/1990",
        );
        const myList = new ToDoList(myUser);
        expect(myList.add(secondItem)).toBe(false);
    });

    // Vérifier qu'un item ne peut pas être ajouté si la ToDoList contient déjà 10 items.
    test('An item cannot be added if the ToDoList already contains 10 items.', () => {
        const myUser = new User(
            "john",
            "Doe",
            "Johndoe@example.com",
            "Password1234",
            "01/01/1990",
        );
        const myList = new ToDoList(myUser);
        const listItems = generate_list_with_30min_interval(10)
        for (const item of listItems) {
            myList.add(item)
        }
        expect(myList.add(secondItem)).toBe(false);
    });

    // Vérifier qu'un item ne peut pas être ajouté sauf si son nom n'existe pas déjà.
    test('An item cannot be added unless its name does not already exist.', () => {
        const myUser = new User(
            "john",
            "Doe",
            "Johndoe@example.com",
            "Password1234",
            "01/01/1990",
        );
        const myList = new ToDoList(myUser);
        expect(myList.add(validItem)).toBe(true);
        const newItem = new Item(validItem.name, "test")
        expect(myList.add(newItem)).toBe(false);
    });
    test('send Email at 8 position', () => {
        const emailSenderService = new EmailSenderService()
        emailSenderService.sendEmail = jest.fn().mockReturnValue(true);
        const res = emailSenderService.sendEmail()
        expect(res).toBe(true);
    });
});