require("dotenv").config();
const express = require("express");
const { neon } = require("@neondatabase/serverless");

const app = express();  // Initialize Express app
const sql = neon(process.env.DATABASE_URL);

app.get("/", async (req, res) => {
  try {
    const result = await sql`SELECT version()`;
    const { version } = result[0];
    res.status(200).send(version);  // Use Express's response method
  } catch (error) {
    res.status(500).send("Error retrieving version");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
