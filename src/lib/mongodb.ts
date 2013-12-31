import mongoose, { Mongoose } from "mongoose";

// Extend NodeJS.Global interface to include mongoose property
declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        con: Mongoose | null;
        promise: Promise<Mongoose> | null;
      };
    }
  }
}

// Prevent re-declaration error in TypeScript
const globalWithMongoose = global as typeof global & {
  mongoose: {
    con: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
};
const MONGODB_URL = process.env.MONGO_DB_URI;

if (!MONGODB_URL) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!globalWithMongoose.mongoose) {
  globalWithMongoose.mongoose = { con: null, promise: null };
}

const cached = globalWithMongoose.mongoose;

const dbConnect = async () => {
  if (cached.con) {
    return cached.con;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.con = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.con;
};

export default dbConnect;
