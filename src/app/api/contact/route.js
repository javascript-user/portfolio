import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate fields
    if (!name || !email || !message) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to you (notification)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      replyTo: email,
      subject: `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: monospace; background: #0a0a0f; color: #e0e0e0; padding: 30px; border-radius: 8px;">
          <h2 style="color: #00fff5; margin-bottom: 20px;">New Portfolio Message</h2>
          <p><strong style="color: #39ff14;">From:</strong> ${name}</p>
          <p><strong style="color: #39ff14;">Email:</strong> <a href="mailto:${email}" style="color: #00fff5;">${email}</a></p>
          <hr style="border-color: rgba(0,255,245,0.2); margin: 20px 0;" />
          <p><strong style="color: #39ff14;">Message:</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.8;">${message}</p>
          <hr style="border-color: rgba(0,255,245,0.2); margin: 20px 0;" />
          <p style="color: #4a5568; font-size: 12px;">Sent from your Cyberpunk Portfolio contact form</p>
        </div>
      `,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Ankit Gupta" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: 'Thanks for reaching out! — Ankit Gupta',
      html: `
        <div style="font-family: monospace; background: #0a0a0f; color: #e0e0e0; padding: 30px; border-radius: 8px;">
          <h2 style="color: #00fff5;">Hey ${name}! 👋</h2>
          <p>Thanks for reaching out through my portfolio. I've received your message and will get back to you within 24 hours.</p>
          <p style="color: #4a5568; margin-top: 20px;">— Ankit Gupta</p>
          <p style="color: #4a5568; font-size: 12px;">Full Stack Developer | New Delhi</p>
        </div>
      `,
    });

    return Response.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
