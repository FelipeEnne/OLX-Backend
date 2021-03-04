const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { validationResult, matchedData } = require("express-validator");
const User = require("../models/User");

const User = require("../models/User");
const State = require("../models/State");

module.exports = {
  signin: async (req, res) => {},
  signup: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.mapped() });
      return;
    }
    const data = matchedData(req);

    const user = await User.findOne({
      email: data.email,
    });
    if (user) {
      res.json({
        error: { email: { msg: "E-mail já existe" } },
      });
      return;
    }

    if (mongoose.Types.ObjectId.isValid(data.state)) {
      const stateItem = await State.findOne(data.state);
      if (!stateItem) {
        res.json({
          error: { email: { msg: "Não existe esse estado" } },
        });
        return;
      }
    } else {
      res.json({
        error: { email: { msg: "Código de estado inválido" } },
      });
      return;
    }

    const passwordHash = await bcrypt.hash(data.passwordHash, 10);

    const payload = (Date.now() + Math.random()).toString();
    const token = await bcrypt.hash(payload, 10);

    const newUser = new User({
      name: data.name,
      email: data.email,
      password,
      token,
      state: data.state,
    });
    await newUser.save();

    res.json({ token });
  },
};
