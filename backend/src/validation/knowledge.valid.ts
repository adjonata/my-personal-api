import { check, param } from "express-validator";

const create = [
  check("link")
    .not()
    .isEmpty()
    .withMessage("O link é obrigatório")
    .isURL()
    .withMessage("A link precisa ser uma URL"),
  check("title")
    .not()
    .isEmpty()
    .withMessage("O título é obrigatório")
    .isString()
    .withMessage("O título precisa ser uma String")
    .isLength({ min: 4 })
    .withMessage("O título precisa ter no mínimo 4 caractéres"),
  check("image")
    .not()
    .isEmpty()
    .withMessage("A imagem é obrigatório")
    .isURL()
    .withMessage("A imagem precisa ser uma URL")
];

const del = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("A id é obrigatória")
];

const edit = [...del, ...create];

export default {
  create,
  delete: del,
  edit
};
