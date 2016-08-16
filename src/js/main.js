import initCommon from './init/common.js'
import initIndex from './init/index.js'
import initVehicle from './init/vehicle.js'

const { pathname } = window.location;

const init = () => {
  initCommon();
  switch (pathname.replace('index.html', '')) {
    case '/':
      initIndex();
      break;
    case '/vehicle.html':
      initVehicle();
      break;
    default:
  }
}
init();
