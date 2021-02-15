let tableViewController = (function () {
  const DOMstrings = {
    filterGroup: '.filter',
    btnAll: '[data-status="all"]',
    rowData: '.rowData',
    customSelect: '.custom-select',
    searchedProduct: '.searched-product',
    dataBtn: 'data-status',
  }

  function getDomStrings() {
    return DOMstrings;
  }

  function getSearchValues() {
    let searchValues = {
      filters: document.querySelectorAll(DOMstrings.filterGroup),
      all: document.querySelector(DOMstrings.btnAll),
      // new: document.querySelector(DOMstrings.btnNew),
      // work: document.querySelector(DOMstrings.btnWork),
      // completed: document.querySelector(DOMstrings.btnCompleted),
      // archive: document.querySelector(DOMstrings.btnArchive),
      row: document.querySelectorAll(DOMstrings.rowData),
      select: document.querySelector(DOMstrings.customSelect),
      products: document.querySelectorAll(DOMstrings.searchedProduct),
    }
    return searchValues;
  }

  function generateTr(dataArr, statusesObj, products) {
    let el = dataArr.map((item) => {
      const tr = document.createElement('tr');
      tr.classList.add('rowData');
      tr.innerHTML = `
          <th scope="row">${item.id}</th>
          <td>${item.date}</td>
          <td>${products[item.product]}</td>
          <td>${item.name}</td>
          <td>${item.email}</td>
          <td>+${item.phone}</td>
          <td>
            <div data-btn="${item.dataAttr}"
            class = "badge badge-pill ${statusesObj[item.status].badgeClass}" >
              	${statusesObj[item.status].label}
            </div>
          </td>
          <td>
            <a href="03-crm-edit-bid.html">Редактировать</a>
          </td>
          `
      // console.log(tr);
      return tr;
    });
    // const tableContainer = document.querySelector('tbody');
    // tr.forEach(item => {
    //   tableContainer.appendChild(item);
    //   // console.log(tableContainer);
    // })
    // console.log(el)
    return el;
  }


  function initTable(dataArr, objStatuses, products) {
    const tableContainer = document.querySelector('tbody');
    tableContainer.innerHTML = '';
    const tr = generateTr(dataArr, objStatuses, products);
    tr.forEach(item => {
      tableContainer.appendChild(item);
      // console.log(tableContainer);
    })
  }

  function selectedItem(target) {
    if (target) {
      document.querySelectorAll('[data-status]').forEach((item) => {
        item.classList.remove('active');
      });
      document.querySelectorAll(`[data-status=${target}]`).forEach((item) => {
        item.classList.add('active');
      });
    }
  }


  return {
    generateTr: generateTr,
    initTable: initTable,
    getDomStrings: getDomStrings,
    getSearchValues: getSearchValues,
    selectedItem: selectedItem,
  }
})();