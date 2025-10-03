require('dotenv').config();
const express = require('express');
const { getHealth } = require('../controllers/health');
const { pollMentions } = require('../controllers/bob/poll-mentions');
const { getConversation } = require('../controllers/bob/get-conversation');
const { authenticate } = require('../middleware/authenticate');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', getHealth);
app.get('/bob/poll-mentions', authenticate, pollMentions);
app.get('/bob/get-conversation', authenticate, getConversation);

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
