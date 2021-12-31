var data = {
  currentDirection: 'east'
}

var $car = document.getElementById('car');
function turn(event) {
  if (event.key === 'ArrowUp' || event.key === 'w') {
    $car.setAttribute('class', 'column-full rotate270')
    data.currentDirection = 'north';
  } else if (event.key === 'ArrowRight' || event.key === 'd'){
    $car.setAttribute('class', 'column-full')
    data.currentDirection = 'east';
  } else if (event.key === 'ArrowDown' || event.key === 's') {
    $car.setAttribute('class', 'column-full rotate90')
    data.currentDirection = 'south';
  } else if (event.key === 'ArrowLeft' || event.key === 'a') {
    $car.setAttribute('class', 'column-full rotate180')
    data.currentDirection = 'west';
  }
  console.log(data);
}

window.addEventListener('keydown', turn);
