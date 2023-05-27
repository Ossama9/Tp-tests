const User = require("./User");

class ToDoList {

    constructor(user) {
        this.user = user;
        this.items = [];
        this.lastItemCreationDate = null;
    }

    isItemNameUnique(newItemName) {
        const condition = (item) => item.name !== newItemName
        return this.items.some(condition);
    }

    canAddItem(item) {
        const limit_date = new Date(new Date() - (30 * 60000));
        return this.lastItemCreationDate <= limit_date && this.isItemNameUnique(item.name) === true && this.user.isValidUser();
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