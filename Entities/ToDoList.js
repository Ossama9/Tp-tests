const User = require('../Entities/User')

class ToDoList {

    constructor(user) {

        if (!(user instanceof User)) {
            throw new Error('User doit être une instance de la classe User.');
        }

        this.user = user;
        this.items = [];
        this.lastItemCreationDate = null;
    }

    isItemNameUnique(newItemName) {
        return this.items.every(item => item.name !== newItemName);
    }

    canAddItem(item) {
        const limit_date = new Date(new Date() - (30 * 60000));
        return this.lastItemCreationDate <= limit_date && this.isItemNameUnique(item.name) === true && this.user.isValidUser() && this.items.length < 10;
    }

    add(item) {
        if (this.canAddItem(item)) {
            this.items.push(item);
            this.lastItemCreationDate = item.createdAt;
            return true
        } else {
            return false
        }
    }
}

module.exports = {
    ToDoList
}