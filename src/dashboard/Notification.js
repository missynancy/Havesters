const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3001;

app.use(express.json());

// Configure your email service (using Nodemailer as an example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Example route to update notifications and send emails
app.post('/update-notifications', (req, res) => {
  const { newNotification, userEmails } = req.body;

  // Logic to save notification (e.g., to a database) would go here

  // Send email to users
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: userEmails.join(','),
    subject: 'New Notification',
    text: newNotification
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Notification sent');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
