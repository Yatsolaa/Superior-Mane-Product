"use strict";

document.querySelectorAll('.accordion-item__trigger').forEach(function (item) {
  return item.addEventListener('click', function () {
    item.parentNode.classList.toggle('accordion-item--active');
  });
});