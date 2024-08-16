module.exports = (req, res) => {
    res.json({
      mapKey: process.env.GOOGLE_MAP_API_KEY
    });
  };