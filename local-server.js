require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/send-message', async (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required' });
  }

  const mailOptions = {
    from: 'rockh7189@gmail.com',
    to: 'jaishreeshyamemitra2006@gmail.com',
    subject: `New Contact Form Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1A56DB, #3B82F6); padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">📬 New Contact Form Submission</h1>
        </div>
        <div style="background: #F8FAFC; padding: 20px; border: 1px solid #E2E8F0; border-radius: 0 0 10px 10px;">
          <p style="margin: 0 0 15px; color: #64748B; font-size: 14px;">Aapko Shree Shyam e-Mitra website se ek naya message mila hai:</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #1E293B; width: 100px;">Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #E2E8F0; color: #1E293B;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #1E293B;">Phone</td>
              <td style="padding: 10px; border-bottom: 1px solid #E2E8F0; color: #1E293B;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #1E293B;">Message</td>
              <td style="padding: 10px; border-bottom: 1px solid #E2E8F0; color: #1E293B;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #94A3B8; font-size: 12px;">Yeh email Shree Shyam e-Mitra website ke contact form se auto-generated hai.</p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, error: 'Failed to send message. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
