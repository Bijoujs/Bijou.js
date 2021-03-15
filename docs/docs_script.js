setInterval(() => {
  try {
    document.querySelector('.os-content-arrange').remove();
  } catch (e) {}

  var els = document.querySelectorAll('ul.accordion-content a');
  for (var i = 0; i < els.length; i++) {
    els[i].innerText = els[i].innerText.replace(/^exports\./, '');
  }
}, 100);
