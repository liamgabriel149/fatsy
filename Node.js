const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const publicVapidKey = '<YOUR_VAPID_PUBLIC_KEY>';
const privateVapidKey = '<YOUR_VAPID_PRIVATE_KEY>';

webpush.setVapidDetails(
  'mailto:you@example.com',
  publicVapidKey,
  privateVapidKey
);

let subscription = null;

app.post('/subscribe', (req, res) => {
  subscription = req.body;
  res.status(201).json({});
});

app.get('/send', (req, res) => {
  const payload = JSON.stringify({
    title: '📩 New SMS',
    body: 'You have a new message like SMS!',
  });

  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error);
  });

  res.send('Notification sent');
});

app.listen(3000, () => console.log('Server started on port 3000'));
