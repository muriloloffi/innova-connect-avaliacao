import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";

var app = express();

app.use(express.json());
app.use(cors())
app.use(cookieSession({
  name: "session",
  secret: "innova-connect-secret",
  maxAge: 24 * 60 * 60 * 1000
}))

app.get("/", cors(), (req, res) => {
  res.status(200).json({ data: { message: "User data" }});
});

export default app;