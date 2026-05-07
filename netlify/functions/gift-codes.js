exports.handler = async function () {
  try {
    const url = "https://kingshot.net/api/gift-codes";
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache'
      }
    });
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data })
    };

  } catch (error) {
    console.error('Error fetching gift codes:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch API" })
    };
  }
};