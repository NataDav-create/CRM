let modelController = (function () {

  const products = {
    'course-php': "Курс по PHP",
    'course-wordpress': "Курс по WordPress",
    'course-vue': "Курс по VUE JS",
    'course-js': "Курс по JavaScript",
    'course-html': "Курс по верстке",
  }

  class Request {
    constructor({
      name,
      email,
      phone,
      status,
      product
    }) {
      this.id = this.generateId();
      this.date = this.generateDate();
      this.product = product;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.status = status;
    }
    generateId() {
      const data = getStorage();
      return data.length + 1;
    }
    generateDate() {
      const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
      const d = new Date();
      const year = d.getFullYear();
      const date = d.getDate();
      const monthIndex = d.getMonth();
      const monthName = months[monthIndex];
      const formatted = `${date}.${monthName}.${year}`
      return formatted;
    }
  }

  const statuses = {
    new: {
      name: 'new',
      label: 'новый',
      badgeClass: 'badge-danger'
    },
    work: {
      name: 'work',
      label: 'В работе',
      badgeClass: 'badge-warning'
    },
    completed: {
      name: 'completed',
      label: 'Завершенный',
      badgeClass: 'badge-success'
    },
    archive: {
      name: 'archive',
      label: 'В архиве',
      badgeClass: 'badge-dark'
    },
    wait: {
      name: 'wait',
      label: 'Ожидается оплата',
      badgeClass: 'badge-info'
    },
    canceled: {
      name: 'canceled',
      label: 'Отказ',
      badgeClass: 'badge-dark'
    }
  }

  const filter = {
    status: 'all',
    product: 'all'
  }

  function newRequest(obj) {
    let item = new Request({
      ...obj,
      status: 'new'
    });
    return item;
  }

  function setStorage(item) {
    localStorage.setItem('formData', JSON.stringify(item));
  }
  const userDataArray = getStorage();

  function getStorage() {
    let dataFromLocal = JSON.parse(localStorage.getItem('formData')) || [];
    return dataFromLocal;
  }

  function filterRequests() {
    let filteredData = userDataArray;
    if (filter.status !== 'all') {
      filteredData = filteredData.filter(item => item.status === filter.status)
    }
    if (filter.product !== 'all') {
      filteredData = filteredData.filter(item => item.product === filter.product);
    }
    return filteredData;
  }

  function editRequest(obj, id) {
    userDataArray.find(item => {
      if (item.id == id) {

        item.name = document.querySelector(obj.name).value;
        item.email = document.querySelector(obj.email).value;
        item.phone = document.querySelector(obj.phone).value;
        item.status = document.querySelector(obj.status).value;
        item.product = document.querySelector(obj.product).value;
        return item;
      }

    })
    setStorage(userDataArray);
  }


  function badgeCounter() {
    const badgesCount = {}
    Object.keys(statuses).forEach(status => {
      const count = calculateStatus(status, userDataArray)
      badgesCount[status] = count
    })
    return badgesCount;
  }

  function calculateStatus(status, data) {
    return status === "all" ?
      data.length :
      data.reduce((acc, request) => request.status === status ? acc + 1 : acc, 0)
  }

  return {
    setStorage: setStorage,
    userDataArray: userDataArray,
    getStorage: getStorage,
    newRequest: newRequest,
    filterRequests: filterRequests,
    badgeCounter: badgeCounter,
    filter: filter,
    statuses: statuses,
    products: products,
    editRequest: editRequest,
  }


})();