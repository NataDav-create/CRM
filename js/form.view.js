let formViewController = (function () {

  const DOMstrings = {
    form: '#request-form',
    inputName: '[name="name"]',
    inputPhone: '[name="phone"]',
    inputEmail: '[name="email"]',
    selectedProduct: '#exampleFormControlSelect1'
  }

  function getInputs() {
    let formData = {
      name: document.querySelector(DOMstrings.inputName).value,
      phone: document.querySelector(DOMstrings.inputPhone).value,
      email: document.querySelector(DOMstrings.inputEmail).value,
      product: document.querySelector(DOMstrings.selectedProduct).value,
    }
    return formData;
  }

  function getDomStrings() {
    return DOMstrings;
  }
  return {
    getInputs: getInputs,
    getDomStrings: getDomStrings
  }

})();