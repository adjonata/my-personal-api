import { check } from "express-validator";

export default {
  create: [
    check("description")
      .not()
      .isEmpty()
      .withMessage("A descrição é obrigatória")
      .isString()
      .withMessage("A descrição precisa ser uma String")
      .isLength({ min: 5 })
      .withMessage("A descrição precisa ter no mínimo 5 caractéres"),
    check("knowledges")
      .not()
      .isEmpty()
      .withMessage("O conhecimento é obrigatório")
      .isString()
      .withMessage("O conhecimento precisa ser uma String")
      .isLength({ min: 5 })
      .withMessage("O conhecimento precisa ter no mínimo 5 caractéres")
  ]
};
