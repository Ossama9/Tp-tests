const {Item} = require('../Entities/Item')

function generate_list_with_30min_interval(number_items) {
    const result = []
    for (let i = 0; i < number_items; i++) {
        const item = new Item(`item-number${i}`, `description-number${i}`)
        const current_date = new Date()
        item.createdAt = current_date.setMinutes(current_date.getMinutes() - ( i * 31))
        result.push(item)
    }
    return result
}

module .exports = {
    generate_list_with_30min_interval
}