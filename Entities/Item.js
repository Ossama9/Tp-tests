class Item{
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.createdAt = new Date();
    }

    isValidItem(){
        if (!this.name || !this.description) {
            return false
        }

        //check max chracters(1000)
        return this.name.length <= 1000;
    }
}

module.exports = {
    Item
}