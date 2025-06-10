import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const dbConnection = () => {
  // Log the MongoDB URI for debugging purposes
  const mongoURI = process.env.MONGO_URI;
  if (!mongoURI) {
    console.error("Error: MONGO_URI is not defined. Please check your environment variables.");
    return;
  }

  mongoose
    .connect(mongoURI, {
      dbName: "RESERVATIONS",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.error(`Some error occurred while connecting to database: ${err}`);
    });
};
