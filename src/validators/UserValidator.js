const { checkSchema } = require("express-validator");

module.exports = {
  editAction: checkSchema({
    token: {
      isEmpty: true,
    },
    name: {
      optional: true,
      trim: true,
      isLength: {
        options: { min: 2 },
      },
      errorMessage: "O nome precisa de pelo menos 2 caracteres",
    },
    email: {
      optional: true,
      isEmail: true,
      normalizeEmail: true,
      errorMessage: "E-mail inválido",
    },
    password: {
      optional: true,
      isLength: {
        options: { min: 2 },
      },
      errorMessage: "Senha precisa de pelo menos 2 caracteres",
    },
    state: {
      optional: true,
      isEmpty: true,
      errorMessage: "Estado não preenchido",
    },
  }),
};
