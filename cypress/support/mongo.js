const { MongoClient } = require('mongodb')

require('dotenv').config()

const mongoUri = process.env.MONGO_URI

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