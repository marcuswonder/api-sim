function pollMentions(req, res) {
    console.log("req.params in pollMentions", req.params);
    console.log("req.body in pollMentions", req.body);
    res.json({ message: `pollMentions req.params: ${req.params} || req.body: ${JSON.stringify(req.body)}` });
}

module.exports = { pollMentions };
