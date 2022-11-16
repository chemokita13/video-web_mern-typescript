import mongoose from 'mongoose';

(async () => {
  try {
    const db = await mongoose.connect(`${process.env.URI}`);
    console.log('db conected to: ', db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
