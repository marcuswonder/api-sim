function getConversation(req, res) {
    console.log("req.params:", JSON.stringify(req.params));
    console.log("req.query:", req.query);
    console.log("req.body:", req.body);
    // res.json({ message: getConversation req.params: ${JSON.stringify(req.params)} || req.body: ${JSON.stringify(req.body)} });

    let conversation =
        req.body.conversation ||
        req.params.conversation ||
        req.query.conversation ||
        null;

    console.log("conversation:", conversation);

    const idx = Number(conversation) -1 ;
    console.log("idx:", idx);
    console.log("typeof idx:", typeof idx);

    if (!Number.isNaN(idx) && conversations[idx]) {
        return res.status(200).json({
            data: conversations[idx],
            message: `Fetched conversation index: ${idx}`
        });

    } else {
        return res.status(200).json({
            data: conversations[0],
            message: `Invalid or missing 'conversation' parameter - expect number - fetched 1st conversation`
        });
    }
}

const conversations = [
    {
        "data": [
            {
            "conversation_id": "2010000000000000001",
            "author_id": "300100001",
            "created_at": "2025-10-03T18:00:00.000Z",
            "id": "2010000000000000001",
            "text": "Name one thing that will 💯 happen in the Premier League game between Bournemouth and Fulham tonight. #BOUFUL"
            },
            {
            "conversation_id": "2010000000000000001",
            "in_reply_to_user_id": "300100001",
            "author_id": "300100002",
            "created_at": "2025-10-03T18:01:00.000Z",
            "id": "2010000000000000002",
            "referenced_tweets": [{ "type": "replied_to", "id": "2010000000000000001" }],
            "text": "@Fred Over three goals",
            "entities": { "mentions": [{ "start": 0, "end": 5, "username": "Fred", "id": "300100001" }] }
            },
            {
            "conversation_id": "2010000000000000001",
            "in_reply_to_user_id": "300100001",
            "author_id": "300100003",
            "created_at": "2025-10-03T18:02:00.000Z",
            "id": "2010000000000000003",
            "referenced_tweets": [{ "type": "replied_to", "id": "2010000000000000001" }],
            "text": "@Fred Draw game",
            "entities": { "mentions": [{ "start": 0, "end": 5, "username": "Fred", "id": "300100001" }] }
            },
            {
            "conversation_id": "2010000000000000001",
            "in_reply_to_user_id": "300100001",
            "author_id": "300100004",
            "created_at": "2025-10-03T18:03:00.000Z",
            "id": "2010000000000000004",
            "referenced_tweets": [{ "type": "replied_to", "id": "2010000000000000001" }],
            "text": "@Fred One team will score",
            "entities": { "mentions": [{ "start": 0, "end": 5, "username": "Fred", "id": "300100001" }] }
            },
            {
            "conversation_id": "2010000000000000001",
            "in_reply_to_user_id": "300100001",
            "author_id": "300100005",
            "created_at": "2025-10-03T18:04:00.000Z",
            "id": "2010000000000000005",
            "referenced_tweets": [{ "type": "replied_to", "id": "2010000000000000001" }],
            "text": "@Fred Easy win",
            "entities": { "mentions": [{ "start": 0, "end": 5, "username": "Fred", "id": "300100001" }] }
            },
            {
            "conversation_id": "2010000000000000001",
            "in_reply_to_user_id": "300100001",
            "author_id": "300100006",
            "created_at": "2025-10-03T18:05:00.000Z",
            "id": "2010000000000000006",
            "referenced_tweets": [{ "type": "replied_to", "id": "2010000000000000001" }],
            "text": "@Fred What do you think, @BobAi?",
            "entities": {
                "mentions": [
                { "start": 0, "end": 5, "username": "Fred", "id": "300100001" },
                { "start": 25, "end": 32, "username": "BobAi", "id": "300199999" }
                ]
            }
            }
        ],
        "includes": {
            "users": [
            { "name": "Fred", "id": "300100001", "username": "Fred" },
            { "name": "Luke", "id": "300100002", "username": "Luke" },
            { "name": "Gaz", "id": "300100003", "username": "Gaz" },
            { "name": "Pete", "id": "300100004", "username": "Pete" },
            { "name": "Maddy", "id": "300100005", "username": "Maddy" },
            { "name": "Dan", "id": "300100006", "username": "Dan" },
            { "name": "Bob AI", "id": "300199999", "username": "BobAi" }
            ]
        },
        "meta": {
            "newest_id": "2010000000000000006",
            "oldest_id": "2010000000000000001",
            "result_count": 6
        }
    }
];


export { getConversation };