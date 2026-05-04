exports.handler = async function () {
  try {
    const url = "https://kingshot.net/api/gift-codes";
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: data ? JSON.stringify({ data }) : JSON.stringify({ data: { giftCodes: [] } })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch API" })
    };
  }
};