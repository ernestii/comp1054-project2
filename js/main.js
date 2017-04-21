(function() {

  let productImageSwitchHandler = function() {
    // Switch product image
    let colorSwitcherNavy = document.getElementById('set-navy');
    let colorSwitcherBlack = document.getElementById('set-black');
    let photo = document.getElementById('photo');

    colorSwitcherBlack.addEventListener('change', function() {
      photo.style.backgroundImage = 'url(../images/product/black.jpg)';
    });

    colorSwitcherNavy.addEventListener('change', function() {
      photo.style.backgroundImage = 'url(../images/product/navy.jpg)';
    });
  }

  window.onload = productImageSwitchHandler;

})();