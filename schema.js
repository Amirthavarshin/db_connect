let mongoose  = require("./mongoconfig");
mongoose = mongoose.mongoose

const MenuSchema = new mongoose.Schema({ ProductName: String, ProductId:Number, Description: String, Units:Number});
const Menu = mongoose.model('tvs', MenuSchema);



// const orderSchema = new mongoose.Schema({ table:Number, order:Array});
// const Order = mongoose.model('orders', orderSchema);


 module.exports.Menu = Menu;
// module.exports.Order= Order;
