function pollMentions(req, res) {
    console.log("req.params in pollMentions", req.params);
    console.log("req.body in pollMentions", req.body);
    return res.status(200).json({
        data: mentions,
        message: `Fetched mentions`
    });
}


const mentions = {
    "data": [
        {
            "author_id": "10001",
            "created_at": "Fri Oct 03 18:00:00 +0000 2025",
            "id": "2010000000000000001",
            "text": "@BobAi What’s your tip for Arsenal v Spurs tonight?",
            "username": "Luke"
        },
        {
            "author_id": "10002",
            "created_at": "Fri Oct 03 18:05:00 +0000 2025",
            "id": "2010000000000000002",
            "text": "@BobAi Over three goals #AFC",
            "username": "Gaz"
        },
        {
            "author_id": "10003",
            "created_at": "Fri Oct 03 18:10:00 +0000 2025",
            "id": "2010000000000000003",
            "text": "Hey @BobAi — Bournemouth vs Fulham, what do you think?",
            "username": "Maddy"
        }
    ],
    "errors": [],
    "includes": {
    "users": [
        {
            "created_at": "2020-05-01T10:00:00Z",
            "id": "10001",
            "name": "Luke Smith",
            "protected": false,
            "username": "Luke"
        },
        {
            "created_at": "2019-08-12T12:15:00Z",
            "id": "10002",
            "name": "Gaz Jones",
            "protected": false,
            "username": "Gaz"
        },
        {
            "created_at": "2021-02-20T09:45:00Z",
            "id": "10003",
            "name": "Maddy Ray",
            "protected": false,
            "username": "Maddy"
        },
        {
            "created_at": "2013-12-14T04:35:55Z",
            "id": "300199999",
            "name": "Bob AI",
            "protected": false,
            "username": "BobAi"
        }
    ]
    },
    "meta": {
        "newest_id": "2010000000000000003",
        "oldest_id": "2010000000000000001",
        "result_count": 3
    }
}


module.exports = { pollMentions };
