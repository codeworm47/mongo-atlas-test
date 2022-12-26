const {MongoClient, ServerApiVersion} = require("mongodb");
(async () => {
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = process.env.MONGO_URI;
    console.log("uri::", uri);
    const config = { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1, connectTimeoutMS: 500, };
    const client = new MongoClient(uri, config);
    await client.connect().then(()=> {
        console.log("SUCCESSFULLY CONNECTED");
    }, (r) => {
        console.error("CONNECTION FAILED::", r);
    })
})()


