import mongoose from 'mongoose';

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: 'upskill',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Other connection options if needed
    });

    const connection = mongoose.connection;
    connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    });
    connection.on('error', (err) => {
      console.log(
        'MongoDB connection error. Please make sure MongoDB is running. Error: ' +
          err
      );
      process.exit();
    });
  } catch (error) {
    console.log('Something went wrong while connecting to MongoDB: ' + error);
  }
}
