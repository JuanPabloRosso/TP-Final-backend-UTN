import { check} from "express-validator";

const validateCreate = [
  check("name").notEmpty().withMessage("Name is required").trim(),
  check("price")
    .isNumeric().withMessage("Price must be a number")
    .notEmpty().withMessage("Price is required")
    .isFloat({ min: 0 }).withMessage("Price must be non-negative"),
  check("description").optional().isString().trim(),
  check("stock")
    .isInt({ min: 0 }).withMessage("Stock must be a non-negative integer")
    .notEmpty().withMessage("Stock is required"),
];

const validateUpdate = [
    check("name").optional().notEmpty().withMessage("Name is required").trim(),
    check("price")
      .isNumeric().optional().withMessage("Price must be a number")
      .notEmpty().withMessage("Price is required")
      .isFloat({ min: 0 }).withMessage("Price must be non-negative"),
    check("description").optional().isString().trim(),
    check("stock")
      .isInt({ min: 0 }).optional().withMessage("Stock must be a non-negative integer")
      .notEmpty().withMessage("Stock is required"),
  ];

export default {validateCreate, validateUpdate}