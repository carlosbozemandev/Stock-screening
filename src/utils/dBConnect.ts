import mongoose, { ConnectOptions } from "mongoose";

const connection = {
  isConnected: null as number | null,
};

export async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    return;
  }

  try {
    mongoose.set("strictQuery", true);
    const db = await mongoose.connect(
      process.env.MONGO_DB_URI as string,
      {
      } as ConnectOptions
    );

    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error(
      error,
      `Unable to connect to mongoose. URI: ${process.env.MONGO_DB_URI}, API_URL: ${process.env.API_URL}`
    );
    throw error;
  }
  console.log("Connected to mongoose");
}

export async function dbDisconnect(): Promise<void> {
  return mongoose.connection.close();
}
