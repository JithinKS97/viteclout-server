import express from "express";
import config from "./config";
import userRouter from "./routes/userRouter";
import connectToDB from "./service/db";
import bodyParser from "body-parser";
import authRouter from "./routes/authRouter";
import healthRouter from "./routes/healthRouter";
import tokenRouter from "./routes/tokenRouter";
import { intitPassportTwitter } from "./controller/auth/passportTwitter";
import session from "express-session";
import passport from "passport";



require("dotenv").config();

const { PORT } = config;

// Create express app
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: process.env.SESSION_SECRET as string }));

// Registering routes
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/token", tokenRouter);
app.use("", healthRouter);

// Initalising passport twitter
app.use(passport.initialize());
app.use(passport.session());

intitPassportTwitter();

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
