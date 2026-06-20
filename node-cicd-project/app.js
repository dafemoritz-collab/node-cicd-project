const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Moritz Tech Solutions</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            background: #f4f4f4;
            padding-top: 100px;
          }
          .card {
            background: white;
            width: 600px;
            margin: auto;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
          }
          h1 {
            color: #0078d4;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Moritz Tech Solutions</h1>
          <h2>Cloud & DevOps Engineering</h2>
          <p>AWS • Docker • Kubernetes • CI/CD</p>
          <p>Welcome to our deployment demo application.</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});