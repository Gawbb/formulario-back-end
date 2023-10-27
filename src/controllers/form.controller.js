const { response } = require("express");

let forms = [];

class FormController {
  getForms(request, response) {
    return response.status(200).json(forms)
  }

  createForm(request, response) {
    const form = request.body;
    const newForm = {
      id: forms.length + 1,
      ...form,
    };
    forms.push(newForm);
    return response.status(201).json(newForm);
  }
}
const formController = new FormController();

module.exports = { formController };