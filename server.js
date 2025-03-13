import { config } from "dotenv";
config()

import { app } from "./middlewares/app.js";
import { connectDB } from "./config/db.js";


connectDB()
app.listen(process.env.PORT, () => console.log("This server is running on http://localhost:" + process.env.PORT))
