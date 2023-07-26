import { showAlert } from './messages';
import './styles.css';

document.querySelector('#btn-alert')
  .addEventListener('click', showAlert);
