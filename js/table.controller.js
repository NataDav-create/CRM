let tableController = (function (dataCtrl, uiCtrl) {
  let dataArrFromLocal = dataCtrl.userDataArray;
  let statuses = dataCtrl.statuses;
  let filter = dataCtrl.filter;
  const DOM = uiCtrl.getDomStrings();
  const products = modelController.products;
  const setupEventListeners = function () {
    const DOM = uiCtrl.getDomStrings();
    document.querySelectorAll(DOM.filterGroup).forEach(btn => {
      btn.addEventListener('click', filterStatus);
    });
    document.querySelector(DOM.customSelect).addEventListener('change', filterProduct);
  }

  function filterStatus(e) {
    e.preventDefault();
    let target = e.target.getAttribute('data-status');
    filter.status = target;
    uiCtrl.selectedItem(target);
    const filterArray = dataCtrl.filterRequests();
    uiCtrl.initTable(filterArray, statuses, products);
  }

  function filterProduct() {
    let filteredOptions = document.querySelector(DOM.customSelect).value;
    filter.product = filteredOptions;
    const filterArray = dataCtrl.filterRequests();
    uiCtrl.initTable(filterArray, statuses, products);
  }
  const countArr = dataCtrl.badgeCounter()


  return {
    init: function () {
      setupEventListeners();
      uiCtrl.initTable(dataArrFromLocal, statuses, products);
      uiCtrl.changeBadgeClass(countArr, dataArrFromLocal);
    }
  }

})(modelController, tableViewController);

tableController.init();