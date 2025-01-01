// lib/mongodb.js

import { MongoClient } from "mongodb";


export default async function connectToDatabase() {
    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        await client.connect();
        return client.db();
    } catch (error) {
        console.log('Error in connecting to MongoDB:', error);
        throw error;
    }

    // mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    // .then(() => {
    //     app.listen(Port, () => {
    //         console.log(`Server is running on port http://localhost:${Port}`);
    //     });
    // })
    // .catch(error => {
    //     console.error('Database connection error:', error);
    // });
}
