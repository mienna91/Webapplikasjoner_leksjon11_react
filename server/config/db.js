import mongoose from 'mongoose';

const connectDatabase = async () => {
    let dBCon;
    try {
        dBCon = await mongoose.connect(process.env.DATABASE_LOCAL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    } catch (error) {
        console.log(error.message);
    }

    console.log(`Connected to mongoDb ${dBCon.connection.host}`);
}

export default connectDatabase;


