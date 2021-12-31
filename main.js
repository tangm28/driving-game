var data = {
  currentDirection: 'east'
}

var $car = document.getElementById('car');
function turn(event) {
  console.log(event.key);
  if (event.key === 'ArrowUp' || event.key === 'w') {
    $car.setAttribute('class', 'column-full rotate270')
  } else if (event.key === 'ArrowRight' || event.key === 'd'){
    $car.setAttribute('class', 'column-full')
  } else if (event.key === 'ArrowDown' || event.key === 's') {
    $car.setAttribute('class', 'column-full rotate90')
  } else if (event.key === 'ArrowLeft' || event.key === 'a') {
    $car.setAttribute('class', 'column-full rotate180')
  }
}

window.addEventListener('keydown', turn);
