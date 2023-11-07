import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bookManagerRoutes from "./routes/bookManagerRoutes.js";

//configure .env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());

//routes
app.use("/api/v1", bookManagerRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Book Manager App</h1>");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
