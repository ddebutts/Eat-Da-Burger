const orm = require('../config/orm');

module.exports = {
    findAll: function(){
        return orm.findAll('Burgers')
    },
    findById: function (id) {
        const condition = "id = " + id
        return orm.findByCondition('Burgers', condition)
    },
    findByName: function (name) {
        const condition = "burger_name = '" + name + "'"
        return orm.findByCondition('Burgers', condition)
    },
    update: function(id, devoured){
        const condition = "id = " + id
        return orm.update('Burgers', { devoured }, condition)
    }
}