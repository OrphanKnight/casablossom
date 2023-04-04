import nc from "next-connect";
import auth from "../../../middleware/auth";
import admin from "../../../middleware/admin";
import User from "../../../models/User";
import db from "../../../utils/db";
import slugify from "slugify";
const handler = nc().use(auth).use(admin);

handler.post(async (req, res) => {
  try {
    const { name } = req.body;
    db.connectDb();
    const test = await User.findOne({ name });
    if (test) {
      return res
        .status(400)
        .json({ message: "User already exists, Try a different name" });
    }
    await new User({ name, slug: slugify(name) }).save();

    db.disconnectDb();
    res.json({
      message: `User ${name} has been created successfully.`,
      categories: await User.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    db.disconnectDb();
    res.status(500).json({ message: error.message });
  }
});

handler.delete(async (req, res) => {
  try {
    const { id } = req.body;
    db.connectDb();
    await User.findByIdAndRemove(id);
    db.disconnectDb();
    return res.json({
      message: "User has been deleted successfuly",
      categories: await User.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
handler.put(async (req, res) => {
  try {
    const { id, name } = req.body;
    db.connectDb();
    await User.findByIdAndUpdate(id, { name });
    db.disconnectDb();
    return res.json({
      message: "User has been updated successfuly",
      categories: await User.find({}).sort({ createdAt: -1 }),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
