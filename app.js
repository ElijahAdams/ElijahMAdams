// Get dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodeMailer = require('nodemailer');
const app = express();
const personalEmail = 'elimalcolmadams@gmail.com';

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/ElijahMAdams')));
app.use(cors({origin: '*'}));
app.use(bodyParser.json());

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/ElijahMAdams/index.html'));
});

const sendMail = (user, callback) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER_NODEMAILER,
      pass: process.env.EMAIL_PASSWORD_NODEMAILER
    }
  });
  const mailToSelf = {
    from: user.email, // sender address
    to: personalEmail, // list of receivers
    subject: `${user.name} Sent a Message from your Website`,
    text: user.message
  };
  transporter.sendMail(mailToSelf, callback);

  const confirmationOptions = {
    from: '"Elijah Adams"' + personalEmail,
    to: user.email,
    subject: 'Elijah Adams Confirmation',
    text: `Hi ${user.name},\n\nI received your message and I'll contact you as soon as possible. \n\n Best Regards,\n Elijah Adams`
  };
  transporter.sendMail(confirmationOptions, callback);
};

app.post('/sendEmail', (req, res) => {
  console.log('email Request received');
  let user = req.body;
  sendMail(user, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: "Failed to send email" });
    } else {
      console.log(`emails sent for${user.email}`);
      res.send(data);
    }
  })
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */


/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, () => console.log('Server running at http://127.0.0.1:' + port + '/') );


