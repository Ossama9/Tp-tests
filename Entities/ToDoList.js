class ToDoList {
    constructor(user) {
        this.user = user;
        this.items = [];
        this.lastItemCreationDate = null;
    }

    canAddItem() {

    }

    add(item) {
        if (this.isValidUser() && this.canAddItem()) {
            this.items.push(item);
            this.lastItemCreationDate = item.creationDate;
            console.log('Item ajouté à la ToDoList.');
        } else {
            console.log('Impossible d\'ajouter l\'item à la ToDoList.');
        }
    }
}

export {ToDoList}