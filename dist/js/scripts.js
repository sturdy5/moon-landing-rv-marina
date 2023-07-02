/*!
* Start Bootstrap - Moon Landing RV Park and Marina v0.1.0 (http://moonlandingrvpark.com/)
* Copyright 2013-2023 Jonathon Sturdevant
* Licensed under MIT (https://github.com/StartBootstrap/moon--landing-rv-marina/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})
