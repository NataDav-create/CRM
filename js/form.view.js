let formViewController = (function () {

  const DOMstrings = {
    form: '#request-form',
    inputName: '[name="name"]',
    inputPhone: '[name="phone"]',
    inputEmail: '[name="email"]',
    selectedProduct: '#exampleFormControlSelect1'
  }

  // function generateDate() {
  //   const months = [
  //     '01',
  //     '02',
  //     '03',
  //     '04',
  //     '05',
  //     '06',
  //     '07',
  //     '08',
  //     '09',
  //     '10',
  //     '11',
  //     '12'
  //   ]
  //   const d = new Date();
  //   const year = d.getFullYear(); // 2019
  //   const date = d.getDate(); // 23
  //   const monthIndex = d.getMonth();
  //   const monthName = months[monthIndex];
  //   console.log(monthName); // January
  //   const formatted = `${date}.${monthName}.${year}`
  //   return formatted;
  // }

  function getInputs() {
    let formData = {
      name: document.querySelector(DOMstrings.inputName).value,
      phone: document.querySelector(DOMstrings.inputPhone).value,
      email: document.querySelector(DOMstrings.inputEmail).value,
      product: document.querySelector(DOMstrings.selectedProduct).value,
      // date: generateDate(),
    }
    return formData;
  }

  function getDomStrings() {
    return DOMstrings;
  }
  return {
    getInputs: getInputs,
    getDomStrings: getDomStrings
  }

})();
// export default formViewController;