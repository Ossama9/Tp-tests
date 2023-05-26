const User = require('../Entities/User')

class ToDoList {
    /**
     * @param {object} user - L'objet utilisateur associé à l'instance.
     * @property {object} user - L'objet utilisateur associé à l'instance.
     * @property {Array} items - Un tableau vide pour stocker les objets d'éléments.
     * @property {Date|null} lastItemCreationDate - La date et l'heure de création du dernier élément, ou null s'il n'y a pas encore eu de création d'élément.
     */
    constructor(user) {

        if (!(user instanceof User)) {
            throw new Error('User doit être une instance de la classe User.');
        }

        this.user = user;
        this.items = [];
        this.lastItemCreationDate = null;
    }

    isItemNameUnique(newItemName) {
        return !this.items.some(item => item.name === newItemName)
    }

    canAddItem(item) {
        const limit_date = new Date(new Date() - (30 * 60000));
        return this.lastItemCreationDate <= limit_date && this.isItemNameUnique(item.name) === true;
    }

    add(item) {
        if (this.canAddItem(item) && this.user.isValidUser) {
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