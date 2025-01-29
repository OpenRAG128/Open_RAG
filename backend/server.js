import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userModel from "./models/userModel.js";
import "dotenv/config";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const app = express();
// Enable CORS
app.use(cors());

app.options('*', cors()); // Allow OPTIONS on all route

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
connectDB();

// const DMY = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
// const Time = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }); // 12-hour format
// const Day = new Date().toLocaleDateString("en-US", { weekday: "long" }) // Day name
// const Timing = DMY + Time + Day;
const date = new Date();
// routes
app.post("/create", async (req, res) => {
  // , number, reached, description
  const { name, email, selectedOption, description } = req.body;
  const newUser = {
    name: name,
    email: email,
    reached: selectedOption,
    description: description,
    date: date
  };
  const createdUser = await userModel.create(newUser);
  console.log(createdUser);
  res.json({ msg: "got it", data: createdUser });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
const PORT = 8081
// starting the server
app.listen(PORT, () => {
  // no need for req and res here
  console.log(`Server is running on http://localhost:${PORT}`);
});
