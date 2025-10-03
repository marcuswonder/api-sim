const express = require('express');
const { getHealth } = require('./controllers/health');
const { pollMentions } = require('./controllers/bob/poll-mentions');
const { getConversation } = require('./controllers/bob/get-conversation');


const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.send('ok');
});

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
