if('serviceWorker'in navigator){navigator.serviceWorker.register('/xapp_frontend/dist/service-worker.js?v=20181115011743').then(function(reg){reg.onupdatefound=function(){var installingWorker=reg.installing;installingWorker.onstatechange=function(){switch(installingWorker.state){case'installed':if(navigator.serviceWorker.controller){var event=document.createEvent('Event');event.initEvent('sw.update',true,true);window.dispatchEvent(event)}break;}}}}).catch(function(e){console.error('Error during service worker registration:',e)})}