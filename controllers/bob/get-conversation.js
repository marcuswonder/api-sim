function getConversation(req, res) {
    console.log("req.body in getConversation", req.body);
    res.json({ message: `getConversation req.body: ${JSON.stringify(req.body)}` });

}

export { getConversation };

const conversation1 = {}