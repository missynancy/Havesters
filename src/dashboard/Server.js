const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', // or another email service
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to send notifications
app.post('/send-notification', (req, res) => {
  const { email, subject, text } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Notification sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
