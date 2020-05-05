const axios = require("axios");

exports.handler = function (event, context, callback) {
  const { API_URL, API_KEY } = process.env;
  const URL = `${API_URL}&apiKey=${API_KEY}`;

  //Send Response
  function send(body) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body),
    });
  }

  //Perform API call
  function getData() {
    axios
      .get(URL)
      .then((res) => send(res.data))
      .catch((error) => send(error));
  }

  //Ensure HTTP Method is Get
  if (event.httpMethod == "GET") {
    getData();
  }
};
