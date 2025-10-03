function getHealth(req, res) {
    console.log("req in getHealth", req);
    console.log("req.body in getHealth", req.body);
    res.send('ok');
};

export { getHealth };