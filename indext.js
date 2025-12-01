import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Health endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date() });
});

// Name endpoint
app.get("/", (req, res) => {
  res.json({ name: "My Simple API" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
