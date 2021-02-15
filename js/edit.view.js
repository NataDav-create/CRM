let editView = (function () {

  const DOMStrings = {
    form: '#crm-edit-form',
    editID: '#edit-id',
    editDate: '#edit-date',
    editProduct: '#edit-product',
    editName: '#edit-name',
    editEmail: '#edit-email',
    editPhone: '#edit-phone',
    editStatus: '#edit-status',
    editBtn: '#save-changes',
    deleteBtn: '#delete-request'
  }

  function getEditInputs() {
    let formData = {
      id: document.querySelector(DOMStrings.editID).textContent,
      date: document.querySelector(DOMStrings.editDate).textContent,
      product: document.querySelector(DOMStrings.editProduct).value,
      name: document.querySelector(DOMStrings.editName).value,
      email: document.querySelector(DOMStrings.editEmail).value,
      phone: document.querySelector(DOMStrings.editPhone).value,
      status: document.querySelector(DOMStrings.editStatus).value
    }
    return formData;
  }

  function getDOMStrings() {
    return DOMStrings;
  }

  return {
    getEditInputs: getEditInputs,
    getDOMStrings: getDOMStrings
  }

})();