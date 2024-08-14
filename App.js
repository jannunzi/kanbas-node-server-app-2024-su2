// const express = require("express");
import "dotenv/config";
import session from "express-session";
import express from "express";
import Hello from "./hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import UserRoutes from "./User/routes.js";
import LikesRoutes from "./Napster/likes/routes.js";

import mongoose from "mongoose";
const CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);

console.log(process.env.MONGO_CONNECTION_STRING);
console.log(process.env.NETLIFY_URL);
console.log(process.env.REMOTE_SERVER);

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  })
);
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));
app.use(express.json());

Hello(app);
Lab5(app);
CourseRoutes(app);
UserRoutes(app);
LikesRoutes(app);

app.listen(4000);
