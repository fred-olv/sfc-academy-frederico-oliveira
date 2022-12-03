window.jQuery = window.$ = require('jquery');
const { cloneDeep } = require('cypress/types/lodash');
const { test } = require('mocha');
var processInclude = require('./util');
var btn = document.querySelector('#btnbtn')

$(document).ready(function () {
    processInclude(require('./components/menu'));
    processInclude(require('./components/cookie'));
    processInclude(require('./components/consentTracking'));
    processInclude(require('./components/footer'));
    processInclude(require('./components/miniCart'));
    processInclude(require('./components/collapsibleItem'));
    processInclude(require('./components/search'));
    processInclude(require('./components/clientSideValidation'));
    processInclude(require('./components/countrySelector'));
    processInclude(require('./components/toolTip'));

    var btn = document.querySelector('#promo-code');
    var container = document.querySelector('.form-group');

    btn.addEventListener('click',function(){
        if(container.style.display === 'block'){
            container.style.display = 'none';
        }else{
            container.style.display = 'none';
        }
    })


});

require('./thirdParty/bootstrap');
require('./components/spinner');
