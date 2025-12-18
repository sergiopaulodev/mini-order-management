const app = require('./src/app');

const PORT = 3000;

app.listen(PORT,() => {
    console.log(`Server running on http://localhost:${PORT}`);
});


//prueba temporal,verificacion manual.
 // const { readOrders, writeOrders } = require('./src/models/orderModel');

 // console.log('Order initially:', readOrders());

 // writeOrders([
  //    {
  //        id: 'test-order-1',
  //        items:[],
  //        status:'pending',
  //        createdAt: new Date().toISOString()
  //    }
  //]);

 // console.log('Order after write:', readOrders());