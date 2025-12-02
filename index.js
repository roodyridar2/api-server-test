import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load .env file depending on NODE_ENV
const envFile = process.env.NODE_ENV === "production" ? ".env.prod" : ".env.dev";
dotenv.config({ path: envFile });

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health endpoint
app.get("/health", (req, res) => {
  res.json({ 
    status: "ok", 
    environment: process.env.ENVIRONMENT, 
    timestamp: new Date() 
  });
});

// Name endpoint
app.get("/", (req, res) => {
  res.json({ 
    name: process.env.API_NAME, 
    environment: process.env.ENVIRONMENT 
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port} [${process.env.ENVIRONMENT}]`);
});
