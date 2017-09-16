import {router} from "./src/routes/routes";
import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import session from "express-session";
import cookieParser from 'cookie-parser';
const app = express();

const port = process.env.PORT || 4000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(session({secret:"fd34s@!@dfa453f3DF#$D&W",resave:false,saveUninitialized:true}))
app.use('/api',router)

mongoose.connect('mongodb://mubashirali:mlab123>@ds139844.mlab.com:39844/patientmanagement')
app.listen(port,() => {
    console.log(port)
})