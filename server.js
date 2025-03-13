import { config } from "dotenv";
config()

import { connectDB } from "./config/db.js";
import { app } from "./middlewares/app.js";


connectDB()
app.listen(process.env.PORT, () => console.log("This server is running on http://localhost:" + process.env.PORT))
