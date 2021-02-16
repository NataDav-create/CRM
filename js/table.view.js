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
            <a href="03-crm-edit-bid.html?id=${item.id}">Редактировать</a>
          </td>
          `
      return tr;
    });
    return el;
  }


  function initTable(dataArr, objStatuses, products) {
    const tableContainer = document.querySelector('tbody');
    tableContainer.innerHTML = '';
    const tr = generateTr(dataArr, objStatuses, products);
    tr.forEach(item => {
      tableContainer.appendChild(item);
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

  function changeBadgeClass(obj, arr) {
    const badges = Array.from(document.querySelectorAll(".badge[data-status]"))
    badges.forEach(badge => {
      badge.textContent = obj[badge.dataset.status]
    })
    let allBadges = document.querySelector(`.badge[data-status=all]`);
    allBadges.textContent = arr.length;
  }



  return {
    generateTr: generateTr,
    initTable: initTable,
    getDomStrings: getDomStrings,
    getSearchValues: getSearchValues,
    selectedItem: selectedItem,
    changeBadgeClass: changeBadgeClass
  }
})();