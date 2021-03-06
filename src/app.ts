import express from "express";
import config from "./config";
import userRouter from "./routes/userRouter";
import connectToDB from "./service/db";
import bodyParser from "body-parser";
import authRouter from "./routes/authRouter";
import healthRouter from "./routes/healthRouter";
import tokenRouter from "./routes/tokenRouter";
import session from "express-session";
import passport from "passport";
import multer from "multer";
import path from 'path';
import { intitPassportTwitter } from "./controller/auth/passportTwitter";

// TODO: ADD TWITTER ENDPOINTS TO CALL API FROM BACKEND

require("dotenv").config();

const cors = require('cors')

const { PORT } = config;

// Create express app
const app = express();

// Middlewares
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
)

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ 
  secret: process.env.SESSION_SECRET as string, 
  resave: true, 
  saveUninitialized: true 
}));

// Initalising passport twitter
app.use(passport.initialize());
app.use(passport.session());
intitPassportTwitter();

// PROFILE PICTURE UPLOAD
app.use("/images", express.static(path.join(__dirname, "/images")))

const storage = multer.diskStorage({
  destination:(req,file,cb) => {
    cb(null,"src/images")
  }, 
  filename:(req,file,cb) => {
    cb(null,req.body.name)
  }
})

const upload = multer({storage:storage})
app.post("/upload", upload.single("file"), (req,res) => {
  res.status(200).json("File uploaded successfully!")
})

// LOGIN
app.get("/getuser", (req, res) => {
  res.send(req.user)
})

// LOGOUT
app.get("/logout",(req, res) => {
  if(req.user){
    req.logout();
    res.send("loggedout")
  }
});

// Registering routes
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/token", tokenRouter);
app.use("", healthRouter);

// Connecting to MongoDB
const bootstrap = async () => {
  try {
    await connectToDB();
    app.listen(PORT, () => {
      console.log(`App is running at ${PORT}`);
    });
  } catch (err) {
    console.log("Error while bootstraping");
    console.log(err);
  }
};

bootstrap();
