const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
require("dotenv").config()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.json({Message: "Welcome to node Js"})
})

app.post("/mailer", (req, res) => {
    var transporter = nodemailer.createTransport({
                                    service: process.env.SERVICE,
                                    auth: { user: process.env.EMAIL, pass: process.env.PASS }
    });

    var mailOptions = {
        from: process.env.EMAIL,
        // to: "rodrigojosecastro@yahoo.com.ar",
        to: req.body.destiny,
        subject: req.body.subject,
        text: req.body.text
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });

})

app.listen(port, function(req, res){
    console.log('Server is running at port: ',port);
});