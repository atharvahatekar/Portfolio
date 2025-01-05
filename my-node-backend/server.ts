import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "kk2575161@gmail.com",
    pass: 'Qwerty@1998',
  },
});

app.post('/send', (req, res) => {
  const { username, message } = req.body;

  // Validate input
  if (!username || !message) {
    return res.status(400).send('Username and message are required.');
  }

  const mailOptions = {
    from: 'kk2575161@gmail.com',
    to:'kk2575161@gmail.com', // Replace with your email address
    subject: `New Testimonial from ${username}`,
    text: `User: ${username}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Failed to send email');
    }
    res.status(200).send(`Email sent: ${info.response}`);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
