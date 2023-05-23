class Item{
    constructor(name, description, state) {
        this.name = name;
        this.description = description;
        this.createdAt = new Date();
        this.state = state;
    }

    isValidItem(){
        //valid user
        /*
        if (!isValidUser){
            return false
        }
         */

        //check max chracters(1000)
        if (this.name.length > 1000){
            return false;
        }

        return true
    }

    createItem(){
        if (this.isValidItem()){
            return this
        }
    }
}

module.exports = {
    Item
}