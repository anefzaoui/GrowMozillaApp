'use strict';

function $(id) {
  return document.getElementById(id);
}

var utils = {

  init: function() {
    console.log("Welcome :)");
  }

};

window.addEventListener('load', function appOnLoad(evt) {
  window.removeEventListener('load', appOnLoad);
  utils.init();
});
