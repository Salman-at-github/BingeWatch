// utils/mongo.js

import mongoose from 'mongoose';

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const uri = 'mongodb://127.0.0.1:27017/BingeWatch'; // Replace 'myDatabaseName' with your actual database name

let cachedConnection = null;

export async function connectToDatabase() {
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return cachedConnection;
  }

  const dbConnection = await mongoose.connect(uri, connectionOptions);

  cachedConnection = dbConnection;
  return dbConnection;
}
