const nodemailer = require("nodemailer");
const { userMailTemplate } = require("./utills/mailtemplates");
const { adminMailTemplate } = require("./utills/adminTemplates");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error("SMTP Error:", error);
  } else {
    console.log("SMTP Server Ready");
  }
});

const mailOption = async (name, email) => {
  return await transporter.sendMail({
    from: `"Mayank" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Message From Mayank",
    html: userMailTemplate(name),
  });
};

const mailOptionForme = async (name, email, message) => {
  return await transporter.sendMail({
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: "New Contact Message",
    html: adminMailTemplate(name, email, message),
  });
};

module.exports = { mailOption, mailOptionForme };
