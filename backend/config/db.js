import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // const conn = await mongoose.connect(
    //   "mongodb+srv://76248usa:timechange@cluster0.hfdej.mongodb.net/cosmosshop?retryWrites=true&w=majority&appName=Cluster0"
    // );
    console.log(`MongoDB connected`);
  } catch (error) {
    console.log(`${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
