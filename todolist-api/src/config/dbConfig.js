import mongoose from "mongoose";

const mongo_url = "mongodb://127.0.0.1:27017/ToDoList-fullstack";

export const connectMongo = () => {
  try {
    const conn = mongoose.connect(mongo_url);

    conn && console.log("mogo is connected");
  } catch (error) {
    console.log(error);
  }
};
