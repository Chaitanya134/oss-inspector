const axios = require('axios');

exports.authenticate = async (req, res) => {
    const { code } = req.body;
    const { CLIENT_ID, CLIENT_SECRET } = process.env;
    const body = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code,
    };

    try {
        const response = await axios.post("https://github.com/login/oauth/access_token",
            body,
            {
                headers: {
                    accept: "application/json",
                },
            }
        );

        const { access_token: accessToken } = response.data;
        try {
            // Get user info from github in json form
            const userResponse = await axios.get(`https://api.github.com/user`, {
                headers: {
                    Authorization: `token ${accessToken}`,
                },
            });

            const user = userResponse.data;
            console.log(user);
            res.status(200).send({ user });
        } catch {
            console.log("error");
            res.status(500).send({ message: "Error getting user data" });
        }
    } catch {
        res.status(500).send("Error signing in");
    }
}