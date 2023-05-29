import mongoose from "mongoose";
import app from "./app/app";
import config from "./config";

const port = config.port

async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Database Connection Successfull")

        app.listen(port, () => {
            console.log(" Server Running")
        })
    }
    catch (err) {
        console.log(err)
    }
}

main()

