exports.handler = async function () {
  try {
    const url = "https://kingshot.net/api/gift-codes";
    const response = await fetch(url);
    const data = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: data
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch API" })
    };
  }
};