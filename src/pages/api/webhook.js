export default function handler(req, res) {
    //const token = process.env.TOKEN;
    const mytoken = process.env.WA_MYTOKEN;
    if (req.method === 'GET') {
        let mode = req.query["hub.mode"];
        let challange = req.query["hub.challenge"];
        let token = req.query["hub.verify_token"];
         
         
        if (mode && token) {
         
            if (mode === "subscribe" && token === mytoken) {
                res.status(200).send(challange);
            } else {
                res.status(403);
            }
         
        }
    }
    if (req.method == 'POST') {
        let body_param = req.body;

        console.log(JSON.stringify(body_param, null, 2));

    }
}