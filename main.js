var data = {
  currentDirection: 'east',
  engine: false,
  coordinate: {
    x: 0,
    y: 0,
  }
}

var engineInterval;

var $car = document.getElementById('car');
function turn(event) {
  if (event.key === 'ArrowUp' || event.key === 'w') {
    $car.setAttribute('class', 'rotate270')
    data.currentDirection = 'north';
  } else if (event.key === 'ArrowRight' || event.key === 'd'){
    $car.setAttribute('class', '')
    data.currentDirection = 'east';
  } else if (event.key === 'ArrowDown' || event.key === 's') {
    $car.setAttribute('class', 'rotate90')
    data.currentDirection = 'south';
  } else if (event.key === 'ArrowLeft' || event.key === 'a') {
    $car.setAttribute('class', 'rotate180')
    data.currentDirection = 'west';
  }
}

function engineSwitch(event) {
  if (event.key === ' ') {
    if (data.engine === false) {
      data.engine = true;
      engineInterval = setInterval(on, 16);
      console.log('go');
    } else {
      data.engine = false;
      clearInterval(engineInterval);
      engineInterval = null;
      console.log('stop');
    }
  }
}

function on() {
  if (data.currentDirection === 'east') {
    data.coordinate.x++;
    var x = data.coordinate.x;
    $car.style.left = (x * 10) + 'px';
  } else if (data.currentDirection === 'south') {
    data.coordinate.y++;
    var y = data.coordinate.y;
    $car.style.top = (y * 10) + 'px';
  }
}

window.addEventListener('keydown', turn);
window.addEventListener('keydown', engineSwitch);
