var data = {
  directions = [east, south, west, north],
  currentDirection = east
}

var $car = document.getElementById('car');
function turn(event) {
  var north = 270;
  $car.setAttribute('class', 'column-full rotate' + north)
}

window.addEventListener('keydown', turn);
