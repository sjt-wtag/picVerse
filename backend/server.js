import express from "express";
import "dotenv/config";
import path from "path";
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.get("/", (req, res) => {
  console.log("hello");
  res.send("hello");
});

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

import routes from "./routes/index.js";
app.use(routes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
