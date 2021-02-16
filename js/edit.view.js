let editView = (function () {

  const DOMStrings = {
    form: '#crm-edit-form',
    id: '#edit-id',
    date: '#edit-date',
    product: '#inputGroupSelect01',
    name: '#edit-name',
    email: '#edit-email',
    phone: '#edit-phone',
    status: '#edit-status',
    editBtn: '#save-changes',
    deleteBtn: '#delete-request'
  }

  function getEditInputs(arr) {
    document.querySelector(DOMStrings.id).textContent = `Заявка №${arr.id}`;
    document.querySelector(DOMStrings.date).textContent = arr.date;
    document.querySelector(DOMStrings.product).value = arr.product;
    document.querySelector(DOMStrings.name).value = arr.name;
    document.querySelector(DOMStrings.email).value = arr.email;
    document.querySelector(DOMStrings.phone).value = arr.phone;
    document.querySelector(DOMStrings.status).value = arr.status;
  }


  function changeBadgeClass(obj, arr) {
    const badges = Array.from(document.querySelectorAll(".badge[data-status]"))
    badges.forEach(badge => {
      badge.textContent = obj[badge.dataset.status]
    })
    let allBadges = document.querySelector(`.badge[data-status=all]`);
    allBadges.textContent = arr.length;
  }

  function getDOMStrings() {
    return DOMStrings;
  }

  return {
    getEditInputs: getEditInputs,
    getDOMStrings: getDOMStrings,
    changeBadgeClass: changeBadgeClass,

  }

})();