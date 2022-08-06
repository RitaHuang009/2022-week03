"use strict";

$(function () {
  $('.burger').on('click', function (e) {
    console.log("yes");
    e.preventDefault();
    $('.nav-dropdown').toggleClass('active');
  });
});
//# sourceMappingURL=all.js.map
