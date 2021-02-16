let editController = (function (dataCtrl, uiCtrl) {
  const DOM = uiCtrl.getDOMStrings();
  let dataArrFromLocal = dataCtrl.userDataArray;
  const id = window.location.search.split('=')[1];
  const request = dataArrFromLocal.find(item => item.id == id);

  const setupEventListeners = function () {
    document.querySelector(DOM.editBtn).addEventListener('click', editRequest);
    document.querySelector(DOM.deleteBtn).addEventListener('click', setArchiveStatus);
  }


  function editRequest(e) {
    e.preventDefault();
    dataCtrl.editRequest(DOM, id)
  }

  function setArchiveStatus(e) {
    e.preventDefault();
    request.status = 'archive';
    dataCtrl.setStorage(dataArrFromLocal);
  }

  const countArr = dataCtrl.badgeCounter()

  return {
    init: function () {
      setupEventListeners();
      uiCtrl.getEditInputs(request);
      uiCtrl.changeBadgeClass(countArr, dataArrFromLocal);
    }
  }

})(modelController, editView);

editController.init();