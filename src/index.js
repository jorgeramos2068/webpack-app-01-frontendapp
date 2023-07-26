import { showAlert } from './messages';
import $ from 'jquery';
import './styles.scss';

document.querySelector('#btn-alert')
  .addEventListener('click', showAlert);

$('#btn-jquery').click(() => {
  alert('Click on jQuery');
});
