const { Router } = require("express");
const { formController } = require("../controllers/form.controller");

const formRouter = Router();

formRouter.use(
    '/form',
    formRouter.get('/all', formController.getForms),
    formRouter.post('/', formController.createForm),

)

module.exports = { formRouter };
