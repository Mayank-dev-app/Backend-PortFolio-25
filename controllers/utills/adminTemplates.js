const adminMailTemplate = (name, email, message) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #0f172a;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        margin: auto;
        background: #111827;
        padding: 25px;
        border-radius: 8px;
        color: #e5e7eb;
      }
      h2 {
        color: #facc15;
      }
      .info {
        margin-bottom: 15px;
      }
      .message-box {
        background: #000;
        padding: 15px;
        border-left: 4px solid #facc15;
        border-radius: 6px;
      }
      strong {
        color: #facc15;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>📩 New Contact Message</h2>

      <div class="info">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      </div>

      <div class="message-box">
        <p>${message}</p>
      </div>
    </div>
  </body>
</html>
`;

module.exports = { adminMailTemplate }