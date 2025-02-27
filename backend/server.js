import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userModel from "./models/userModel.js";
import "dotenv/config";
import nodemailer from "nodemailer";
import { Parser } from "json2csv";

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

// Convert to IST (Indian Standard Time)
const options = { timeZone: "Asia/Kolkata", hour12: true, hour: "2-digit", minute: "2-digit" };
const HrMin = now.toLocaleTimeString("en-US", options); // e.g., "02:30 PM"

// Get date in YYYY-MM-DD format
const DMY = now.toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" }); // "YYYY-MM-DD"

// Get day name
const Day = now.toLocaleDateString("en-US", { timeZone: "Asia/Kolkata", weekday: "long" });

// Final formatted timing
const timing = `${DMY} ${HrMin} ${Day}`;

console.log(timing); 


// // routes
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
// endpoint to download csv file 
app.get("/export", async (req, res) => {
  const users = await userModel.find().lean(); 
  console.log(users);
  const fields = ["name", "email", "reached", "description", "timing"];
  const json2csvParser = new Parser({ fields });
  const csv = json2csvParser.parse(users);
  res.setHeader('Content-disposition', 'attachment; filename=users.csv');
  res.set('Content-Type', 'text/csv');
  res.status(200).send(csv);
});


app.get('/totalUsers', async (req, res) => {
  try {
    const users = await userModel.find().lean();  // Wait for the result of the database query
    console.log(users);
    res.status(200).json({ data:users.length });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
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
