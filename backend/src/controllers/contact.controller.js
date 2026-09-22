import nodemailer from "nodemailer";
import Message from "../models/message.model.js";

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, data, department, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email and message are required.",
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      phone,
      date,
      department,
      message,
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      replyTo: email,
      subject: `New appointment request - ${department || "General"}`,
      html: `
            <h3>New appointment request</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Preferred Date:</strong> ${date || "N/A"}</p>
            <p><strong>Department:</strong> ${department || "N/A"}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            `,
    });
    res.status(201).json({
      success: true,
      data: newMessage,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: "Something went wrong. Please try again later",
    });
  }
};
