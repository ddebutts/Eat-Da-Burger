const connection = require('./connection');


module.exports = {
    findAll: function (table) {
        return new Promise(function (resolve, reject) {
            try {
                const data = connection.query("SELECT * FROM ??", [table])
                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    },
    findByCondition: function (table, condition) {
        return new Promise(function (resolve, reject) {
            try {
                const str = "SELECT * FROM ?? WHERE " + condition
                const data = connection.query(str, [table])
                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    },
    update: function (table, objColVals, condition) {
        return new Promise(function (resolve, reject) {
            try {
                let str = "UPDATE ?? SET "
                str += objToSql(objColVals) // { devoured: 1, age: 1 } => devoured = 1, age = 1
                str += " WHERE ";
                str += condition
                console.log(str)
                const data = connection.query(str, [table])
                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    }
}

function objToSql(obj) {
    let temp = [];

    for (let key in obj) {
        temp.push(key + " = " + obj[key])
    }

    return temp.join(",")
}