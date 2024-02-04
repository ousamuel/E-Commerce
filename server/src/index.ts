// src/index.ts
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());

app.get("/", (req: any, res: any) => {
  res.send("Hello from your TypeScript Node.js backend!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
