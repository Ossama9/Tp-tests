class Item{
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.createdAt = new Date();
    }

    isValidItem(){
        //valid user
        /*
        if (!isValidUser){
            return false
        }
         */

        if (!this.name || !this.description) {
            return false
        }

        //check max chracters(1000)
        if (this.name.length > 1000){
            return false;
        }

        return true
    }

    createItem(){
        if (this.isValidItem()){
            return JSON.stringify(this)
        }
    }
}

module.exports = {
    Item
}