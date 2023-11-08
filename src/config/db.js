import mongoose from "mongoose";

// Connect to MongoDB
const connectDB = async () => {
  try {
    const mongoURL =
      process.env.MONGO_URL ||
      "mongodb+srv://avinash:avinashsahu@cluster0.qejlchd.mongodb.net/";

    const conn = await mongoose.connect(mongoURL);
  } catch (error) {
    throw error;
  }
};

export default connectDB;
