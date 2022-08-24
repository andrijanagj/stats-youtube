import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/search",
      params: {
        q: req.query.search,
        part: "snippet,id",
      },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // res.status(200).json(response.data);

        const optionsAPI = {
          method: "GET",
          url: "https://youtube-v31.p.rapidapi.com/channels",
          params: {
            part: "snippet,statistics,contentDetails,recordingDetails",
            id: response.data.items[0].snippet.channelId,
          },
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
            "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
          },
        };
        axios.request(optionsAPI).then(function (resp) {
          res.status(200).json(resp.data);
        });
      })
      .catch(function (error) {
        console.error(error);
        res.status(response.status);
      });
  } else {
    res.status(400);
  }
}
