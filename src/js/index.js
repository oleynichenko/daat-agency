import "../css/index.css";
import theme from './theme.js';

const onWindowLoad = () => {
  theme();
};

window.addEventListener('load', onWindowLoad);

