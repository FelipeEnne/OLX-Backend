const { checkSchema } = require("express-validator");

module.exports = {
  signup: checkSchema({
    name: {
      trim: true,
      isLength: {
        options: { min: 2 },
      },
      errorMessage: "O nome precisa de pelo menos 2 caracteres",
    },
    email: {
      isEmail: true,
      normalizeEmail: true,
      errorMessage: "E-mail inválido",
    },
    password: {
      isLength: {
        options: { min: 2 },
      },
      errorMessage: "Senha precisa de pelo menos 2 caracteres",
    },
    state: {
      isEmpty: true,
      errorMessage: "Estado não preenchido",
    },
  }),
  signin: checkSchema({
    email: {
      isEmail: true,
      normalizeEmail: true,
      errorMessage: "E-mail inválido",
    },
    password: {
      isLength: {
        options: { min: 2 },
      },
      errorMessage: "Senha precisa de pelo menos 2 caracteres",
    },
  }),
};
