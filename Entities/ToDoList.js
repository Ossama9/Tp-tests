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

    isItemNameUnique(newItemName: string) {
        const condition = (item) => item.name === newItemName
        this.items.some()
    }

    canAddItem() {
        const date_now = new Date();
        const limit_date = new Date(date_now.getTime() - (30 * 60000));
        if (this.lastItemCreationDate < limit_date) {
            console.log("ok")
        } else {
            console.log("non")
        }
        this.items.forEach()

    }

    add(item) {
        if (this.canAddItem()) {
            this.items.push(item);
            this.lastItemCreationDate = item.creationDate;
            console.log('Item ajouté à la ToDoList.');
        } else {
            console.log('Impossible d\'ajouter l\'item à la ToDoList.');
        }
    }
}

export {ToDoList}