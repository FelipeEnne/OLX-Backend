const { validationResult, matchedData } = require("express-validator");

module.exports = {
  signin: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.mapped() });
      return;
    }
    const data = matchedData(req);

    res.json({ data });
  },
  signup: async (req, res) => {},
};
