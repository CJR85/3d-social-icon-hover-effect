VanillaTilt.init(document.querySelectorAll('.sci li a'), {
  max: 25,
  speed: 400,
});

let list = document.querySelectorAll('.sci li'),
  bg = document.querySelector('.socialMedia');
list.forEach((elements) => {
  elements.addEventListener('mouseenter', function (event) {
    let color = event.target.getAttribute('data-color');
    bg.getElementsByClassName.backgroundColor = color;
  });
  elements.addEventListener('mouseleave', function (event) {
    bg.style.backgroundColor = '#fff';
  });
});
