import { check } from "express-validator";

export default {
  create: [
    check("email")
      .not()
      .isEmpty()
      .withMessage("O e-mail é obrigatório!")
      .isEmail()
      .withMessage("E-mail inválido"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("A senha é obrigatória")
      .isString()
      .withMessage("A senha precisa ser uma String")
      .isLength({ min: 4 })
      .withMessage("A senha precisa ter no mínimo 4 dígitos")
      .isLength({ max: 30 })
      .withMessage("A senha precisa ter no máximo 30 dígitos")
  ]
};
