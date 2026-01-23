const nodemailer = require("nodemailer");
const { userMailTemplate } = require("./utills/mailtemplates");
const { adminMailTemplate } = require("./utills/adminTemplates");
require("dotenv").config();


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD, // Gmail App Password
  },
});

const mailOption = async (name, email) => {
  try {
    const response = await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Message From Mayank",
      text: "Thank you for sending your message. I will contact you soon.",
      html: userMailTemplate(name),
    });
    return response;
  } catch (error) {
    console.error("Email error:", error);
    throw new Error("Email not sent");
  }
};

const mailOptionForme = async (name, email, message) => {
  try {
    const response = await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: "Message From Mayank",
      text: "Thank you for sending your message. I will contact you soon.",
      html: adminMailTemplate(name, email, message),
    });
    return response;
  } catch (error) {
    console.error("Email error:", error);
    throw new Error("Email not sent");
  }
}

module.exports = { mailOption, mailOptionForme };
