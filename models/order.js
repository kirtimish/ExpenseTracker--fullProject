const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    paymentid: {
        type: String, 
    },
    orderid: {
        type: String, 
        required: true
    },
    status: {
        type: String,
        required: true 
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Order', orderSchema);

// const Sequelize = require('sequelize');
// const sequelize = require('../util/database');

// //id, name , password, phone number, role

// const Order = sequelize.define('order', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     paymentid: Sequelize.STRING,
//     orderid: Sequelize.STRING,
//     status: Sequelize.STRING
// })

// module.exports = Order;