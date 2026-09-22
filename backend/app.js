import express from "express";
import cors from "cors";
import contactRoutes from "./src/routes/contact.route.js";

const app = express();

app.use(
  cors({
    origin: process.eventNames.CLIENT_URL || "*",
  }),
);

app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => res.send("API is running"));

export default app;
