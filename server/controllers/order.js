const Order = require("../models/order.js");

module.exports.PlaceOrder = async(req, res)=>{
    let data = req.body;
    console.log(data);
    // const newData = new Order(data.data);
    // const savedData = await newData.save();
    res.send("Order Placed Successfully");
}