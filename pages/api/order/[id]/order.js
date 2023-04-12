import nc from "next-connect";
import auth from "../../../../middleware/auth";
import Order from "../../../../models/Order";
import db from "../../../../utils/db";

const handler = nc().use(auth);

handler.patch(async (req, res) => {
  console.log("hello from api");
  await db.connectDb();
  const order = await Order.findById(req.query.id);
  if (order) {
    order.status = req.body.status; // Update the order status
    const updatedOrder = await order.save();
    await db.disconnectDb();
    res.json({ message: "Order status updated.", order: updatedOrder });
  } else {
    await db.disconnectDb();
    res.status(404).json({ message: "Order is not found." });
  }
});

export default handler;
