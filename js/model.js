let modelController = (function () {

  function setItemInLocalStorage(item) {
    let data = JSON.parse(localStorage.getItem('formData')) || [];
    data.push(item);
    localStorage.setItem('formData', JSON.stringify(data));
    console.log(localStorage.getItem('formData'));
  }
  return {
    setItemInLocalStorage: setItemInLocalStorage
  }


})();