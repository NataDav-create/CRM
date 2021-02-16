let formController = (function (appCtrl, uiCtrl) {

  const setupEventListeners = function () {
    const DOM = uiCtrl.getDomStrings();
    document.querySelector(DOM.form).addEventListener('submit', ctrlAddRequest);
  }


  //function by submit form
  function ctrlAddRequest(e) {
    e.preventDefault();
    let dataArr = appCtrl.getStorage();
    let input = uiCtrl.getInputs();
    let newReq = appCtrl.newRequest(input);
    dataArr.push(newReq);
    appCtrl.setStorage(dataArr);
  }

  return {
    init: function () {
      setupEventListeners();
    }
  };

})(modelController, formViewController);

formController.init();