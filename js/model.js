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
      // this.userClass = userClass;
      // this.dataAttr = dataAttr;
    }
    generateId() {
      const data = getStorage();
      // console.log(data);
      return data.length + 1;
    }
    generateDate() {
      const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
      const d = new Date();
      const year = d.getFullYear(); // 2019
      const date = d.getDate(); // 23
      const monthIndex = d.getMonth();
      const monthName = months[monthIndex];
      // console.log(monthName); // January
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
  console.log(userDataArray)

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
    /////////
    // Object.keys(filter).forEach(item => {
    //   if (filter[item] !== 'all') {
    //     filteredData = filtereData.filter(request => request[item] === filter[item])
    //   }
    // })
    ////////////
    return filteredData;
  }

  return {
    setStorage: setStorage,
    userDataArray: userDataArray,
    getStorage: getStorage,
    newRequest: newRequest,
    filterRequests: filterRequests,
    filter: filter,
    statuses: statuses,
    products: products,
  }


})();