class ToDoList {
    /**
     * @param {object} user - L'objet utilisateur associé à l'instance.
     * @property {object} user - L'objet utilisateur associé à l'instance.
     * @property {Array} items - Un tableau vide pour stocker les objets d'éléments.
     * @property {Date|null} lastItemCreationDate - La date et l'heure de création du dernier élément, ou null s'il n'y a pas encore eu de création d'élément.
     */
    constructor(user) {
        this.user = user;
        this.items = [];
        this.lastItemCreationDate = null;
    }

    isItemNameUnique(newItemName) {
        const condition = (item) => item.name === newItemName
        return this.items.some(condition) === false;
    }

    canAddItem(item) {
        const limit_date = new Date(new Date() - (30 * 60000));
        return this.lastItemCreationDate <= limit_date && this.isItemNameUnique(item.name) === true;
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