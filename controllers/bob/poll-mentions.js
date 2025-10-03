function pollMentions(req, res) {
    console.log("req.body in pollMentions", req.body);
    res.json({ message: `pollMentions req.body: ${JSON.stringify(req.body)}` });
}

module.exports = { pollMentions };
