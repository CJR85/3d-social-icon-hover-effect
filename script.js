let list = document.querySelectorAll('.sci li'),
  bg = document.querySelector('.socialMedia');
list.forEach((elements) => {
  elements.addEventListener('mouseenter', function (event) {
    let color = event.target.getAttribute('data-color');
    bg.getElementsByClassName.backgroundColor = color;
  });
});
