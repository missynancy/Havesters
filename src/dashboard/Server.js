require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000; // Use a single port for the server

// Middleware to parse JSON bodies
app.use(express.json());

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Ensure this matches the service in your .env file
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Endpoint to send notifications
app.post('/send-notification', (req, res) => {
  const { email, subject, text } = req.body;

  if (!email || !subject || !text) {
    return res.status(400).send('Missing required fields');
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Notification sent: ' + info.response);
  });
});

// Endpoint to update notifications and send emails to multiple users
app.post('/update-notifications', (req, res) => {
  const { newNotification, userEmails } = req.body;

  if (!newNotification || !Array.isArray(userEmails)) {
    return res.status(400).send('Invalid input');
  }

  // Ensure emails are properly formatted
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const invalidEmails = userEmails.filter(email => !emailRegex.test(email));
  if (invalidEmails.length > 0) {
    return res.status(400).send('Invalid email address(es): ' + invalidEmails.join(', '));
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmails.join(','),
    subject: 'New Notification',
    text: newNotification,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Failed to send notification');
    }
    res.status(200).send('Notification sent');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
