import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userModel from "./models/userModel.js";
import "dotenv/config";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { Resend } from 'resend';

const app = express();
// Enable CORS
app.use(cors());

app.options('*', cors()); // Allow OPTIONS on all route

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
connectDB();
const resend = new Resend('re_KS4MAwzv_BnZtefRM5qyVfEmLFRzw57F8');
const DMY = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
const Time = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }); // 12-hour format
const Day = new Date().toLocaleDateString("en-US", { weekday: "long" }) // Day name
const timing = `${DMY} ${Time} ${Day}`; // Concatenate with spaces for clarity
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
    timing:timing
  };
  const createdUser = await userModel.create(newUser);
  console.log(createdUser);
  res.json({ msg: "got it", data: createdUser });
  // Send email to the user
  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'patelharsh90541@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
  });
  
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
