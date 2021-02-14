let formController = (function (appCtrl, uiCtrl) {

  const setupEventListeners = function () {
    const DOM = uiCtrl.getDomStrings();
    document.querySelector(DOM.form).addEventListener('submit', ctrlAddRequest);
  }

  //function by submit form
  function ctrlAddRequest(e) {
    e.preventDefault();

    let input = uiCtrl.getInputs();
    appCtrl.setItemInLocalStorage(input);
  }

  return {
    init: function () {
      setupEventListeners();
    }
  };

})(modelController, formViewController);

formController.init();