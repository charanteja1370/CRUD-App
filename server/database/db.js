import mongoose from 'mongoose';


const Connection = async (username, password) => {

    const URL = `mongodb+srv://${username}:${password}@crud-db.ux9go3q.mongodb.net/CRUD-DB?retryWrites=true&w=majority&appName=CRUD-DB`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting with the database ", error);
    }
}

export default Connection;