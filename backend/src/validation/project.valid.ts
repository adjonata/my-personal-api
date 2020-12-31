import { check, param } from "express-validator";

const create = [
  check("image")
    .not()
    .isEmpty()
    .withMessage("A imagem é obrigatória")
    .isURL()
    .withMessage("Insira um link da imagem"),
  check("title")
    .not()
    .isEmpty()
    .withMessage("O título é obrigatório")
    .isString()
    .withMessage("O título precisa ser uma String")
    .isLength({ min: 3 })
    .withMessage("O título precisa ter no mínimo 3 caractéres"),
  check("description")
    .isString()
    .withMessage("A descrição precisa ser uma String")
    .isLength({ min: 5 })
    .withMessage("A descrição precisa ter no mínimo 5 caractéres"),
  check("link")
    .not()
    .isEmpty()
    .withMessage("O link é obrigatório")
    .isURL()
    .withMessage("O link precisa ser uma URL"),
  check("spotlight")
    .not()
    .isEmpty()
    .withMessage("O destaque é obrigatório")
    .isBoolean()
    .withMessage("O destaque precisa ser um booleano"),
  check("color")
    .isString()
    .withMessage("A cor precisa ser uma string")
];

const del = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("A id é obrigatória")
];

const edit = [...del, ...create];

export default { create, delete: del, edit };
