// Adapted from https://codepen.io/ullibodnar/pen/MXoezR

var toggleElements = [
  document.querySelector('body'),
  document.querySelector('.panel')
]

function refreshNightMode() {
  toggleElements.forEach(element => {
    if(element) {
      element.classList.remove('night-mode')
      if (localStorage.getItem('mode') === 'night') {
        element.classList.add('night-mode')
      }
    }
  });
}

// nightModeInitialize
var nightModeInitialize = function() {
  // Recover night mode state, then enable transitions only after loaded.
  refreshNightMode();
  window.addEventListener('load', (event) => {
    var footer = document.getElementById('footer-night-mode');
    var nightModeButton = document.createElement('button'); 
    nightModeButton.classList.add('nightModeButton');
    nightModeButton.classList.add('navbar-right');
    nightModeButton.innerText = '🌙 Night Mode';
    // Night mode button listener
    nightModeButton.addEventListener('click', function () {
      if (localStorage.getItem('mode') === 'night') {
        localStorage.setItem('mode', 'day');
      } else {
        localStorage.setItem('mode', 'night');
      }
      refreshNightMode();
    });;
    nightModeAddElement(nightModeButton);
    footer.appendChild(nightModeButton);

    toggleElements.forEach(element => {if(element) element.classList.add('transition-mode')});
  });
}();

function nightModeAddElement(element) {
  if(element) {
    element.classList.remove('night-mode')
    if (localStorage.getItem('mode') === 'night') {
      element.classList.add('night-mode')
    }
    element.classList.add('transition-mode')
    toggleElements.push(element);
  }
}