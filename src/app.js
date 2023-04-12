import express from "express"
import router from "./routers";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";


dotenv.config()
const app = express();



app.use(express.json())
app.use(cors())

// app.listen(process.env.PORT, () => {
//     console.log(`App running on http://localhost:${process.env.PORT}`);
// });
mongoose.connect(`${process.env.URI_DB}`)

app.use("/api", router);
export const viteNodeApp = app;

// Step 1: tạo file db.json
// Step 2: cài đặt json-server.
// Step 3: cài đặt concurrently
// Step 4: config lại package.json
// Step 5: install axios
// Step 6: Code getlist, getdetails

