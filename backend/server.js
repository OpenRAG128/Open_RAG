import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userModel from "./models/userModel.js";
import "dotenv/config";
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

const now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();

// Convert to 12-hour format
let period = hour >= 12 ? 'PM' : 'AM';

// Format minute to be two digits
minute = minute < 10 ? '0' + minute : minute;

const HrMin = `${hour}:${minute} ${period}`;
const DMY = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
const Day = new Date().toLocaleDateString("en-US", { weekday: "long" }); // Day name
const timing = `${DMY} ${HrMin} ${Day}`; // Concatenate with spaces for clarity

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

  //Mail Service added

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: "nisarg.nargund@gmail.com",
      pass: "yotskzqtahgbtntn",
    },
  });

  const mailOptions = {
    from: "nisarg.nargund@gmail.com",
    to: email,
    subject: "no-reply",
    html: `
    <h3 >Greetings user,</h3></br>
    <p style="font-size: 16px;">Thank you !</p>
    <p>for reaching out to <strong style="#3dff81">OpenRAG!</strong> We’re excited to have you here and are committed to providing you with the best AI-powered solutions for all your queries.
    Our team will review your query and get back to you as soon as possible. In the meantime, feel free to explore our website for more information about our services on our official website.
    If you have any urgent concerns, don’t hesitate to contact our founder at 
    </p>
     <hr
        style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0"
          />
    <strong >nisarg.nargund@gmail.com</strong>!
  `,
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
  res.send("Hey , This is backend");
});

const PORT = 8081;
// starting the server
app.listen(PORT, () => {
  // no need for req and res here
  console.log(`Server is running on http://localhost:${PORT}`);
});
