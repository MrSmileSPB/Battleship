

require('../css/styles.css');
require('../css/test.css');
require('../css/components/validForm.css');


console.log('✅ script.js загружен');

var message = 'Webpack работает!';

function showMessage() {
  var element = document.createElement('div');
  element.innerHTML = 
    '<h1 style="color: green; text-align: center; margin-top: 100px;">' + 
    message + 
    '</h1>' +
    '<div style="text-align: center;">' +
    '<button onclick="alert(\'✅ Всё работает!\')">Тест</button>' +
    '</div>';
  document.body.appendChild(element);
}

document.addEventListener('DOMContentLoaded', showMessage);