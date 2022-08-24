import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "GET",

      url: "https://youtube-v31.p.rapidapi.com/search",
      params: {
        channelId: req.query.channel,
        part: "snippet,id",
        order: "date",
        maxResults: "4",
      },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };
    console.log("channel id handler", req);
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  } else {
    res.status(400);
  }
}
