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
    console.log(input);
    let newReq = appCtrl.newRequest(input);
    console.log(newReq)
    dataArr.push(newReq);
    appCtrl.setStorage(dataArr);

    // let data = JSON.parse(localStorage.getItem('formData')) || [];
    // data.push(input);
    // console.log(data)
    // localStorage.setItem('formData', JSON.stringify(data));
    // console.log(localStorage.getItem('formData'));
  }

  return {
    init: function () {
      console.log('app started');
      setupEventListeners();
    }
  };

})(modelController, formViewController);

formController.init();