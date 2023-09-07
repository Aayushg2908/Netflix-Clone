import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://aayushg2908:2gSUwVd6Gwz8ygQ0@cluster0.mtdcccd.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("mongodb is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
