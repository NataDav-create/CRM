let editController = (function (dataCtrl, uiCtrl) {
  const DOM = uiCtrl.getDOMStrings();

  const setupEventListeners = function () {
    // const DOM = uiCtrl.getDomStrings();
    document.querySelector(DOM.editBtn).addEventListener('click', editRequest);
    document.querySelector(DOM.deleteBtn).addEventListener('click', deleteRequest);
  }

  function editRequest(e) {
    e.preventDefault();
    console.log('edit');
    let input = uiCtrl.getEditInputs();
    console.log(input);
  }

  function deleteRequest(e) {
    e.preventDefault();
    console.log('delete');
  }

  return {
    init: function () {
      console.log('edit started');
      setupEventListeners();
    }
  }

})(modelController, editView);

editController.init();