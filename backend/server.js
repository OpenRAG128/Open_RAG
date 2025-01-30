import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userModel from "./models/userModel.js";
import "dotenv/config";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { Resend } from "resend";
import nodemailer from "nodemailer";
const app = express();
// Enable CORS
app.use(cors());

app.options("*", cors()); // Allow OPTIONS on all route

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
connectDB();
const resend = new Resend("re_KS4MAwzv_BnZtefRM5qyVfEmLFRzw57F8");
const DMY = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
const Time = new Date().toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
}); // 12-hour format
const Day = new Date().toLocaleDateString("en-US", { weekday: "long" }); // Day name
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
    timing: timing,
  };
  const createdUser = await userModel.create(newUser);
  console.log(createdUser);
  res.json({ msg: "got it", data: createdUser });
  // Send email to the user
  // await resend.emails.send({
  //   from: 'patelharsh90541@gmail.com',
  //   to: email,
  //   subject: 'no-reply',
  //   html: `
  //     <p>Thank you for reaching out to OpenRAG! We’re excited to have you here and are committed to providing you with the best AI-powered solutions for all your queries.
  //     Our team will review your query and get back to you as soon as possible. In the meantime, feel free to explore our website for more information about our services on our official website.
  //     If you have any urgent concerns, don’t hesitate to contact our founder at <strong style="color: #34d399;">nisarg.nargund@gmail.com</strong>!</p>
  //   `
  // });
  

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "youremail@gmail.com",
      pass: "yourpassword",
    },
  });

  var mailOptions = {
    from: "patelharsh90541@gmail.com",
    to: "patelharsh749005.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
const PORT = 8081;
// starting the server
app.listen(PORT, () => {
  // no need for req and res here
  console.log(`Server is running on http://localhost:${PORT}`);
});
