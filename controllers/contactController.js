const { mailOption, mailOptionForme} = require("./mailIntegration");

const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Email send
    await mailOption(name, email);
    await mailOptionForme(name, email, message);
    console.log("Message Received:", req.body);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully & email delivered"
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Message received but email not sent"
    });
  }
};

module.exports = { sendMessage };
