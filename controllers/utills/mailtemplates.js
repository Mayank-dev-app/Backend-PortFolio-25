const userMailTemplate = (name) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        margin: auto;
        background: #ffffff;
        padding: 25px;
        border-radius: 8px;
      }
      h2 {
        color: #facc15;
      }
      p {
        color: #333;
        line-height: 1.6;
      }
      .footer {
        margin-top: 20px;
        font-size: 12px;
        color: #777;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Hi ${name} 👋</h2>
      <p>
        Thank you for reaching out to me. I’ve received your message and
        will get back to you as soon as possible.
      </p>
      <p>
        Meanwhile, feel free to check out my GitHub or LinkedIn for more updates.
      </p>
      <p>Have a great day! 😊</p>

      <div class="footer">
        <p>— Mayank Sharma</p>
        <p>Full Stack Developer</p>
      </div>
    </div>
  </body>
</html>
`;

module.exports = { userMailTemplate }