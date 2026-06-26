import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, phone, message } = await request.json();

    if (!name || !phone || !message) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'rockh7189@gmail.com',
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

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: `Error: ${error.message}` }, { status: 500 });
  }
}
