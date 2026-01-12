const { MongoClient } = require('mongodb')
const mongoUri = 'altera'
const cliente = new MongoClient(mongoUri) //conectar no cluster

async function connect(){
    await cliente.connect()
    return cliente.db('markdb') //conectar na database
}

async function disconnect(){
    await cliente.disconnect()
}

module.exports = {
    connect,
    disconnect
}