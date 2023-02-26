'use strict';
const dashboardNav = document.querySelector('#dashboardNav');
const statisticsNav = document.querySelector('#statisticsNav');
const projectsNav = document.querySelector('#projectsNav');
const usersNav = document.querySelector('#usersNav');
const messagesNav = document.querySelector('#messagesNav');
const filesNav = document.querySelector('#filesNav');
const settingsNav = document.querySelector('#settingsNav');

const appContainer = document.querySelector('#appContainer');

const dashboardDisplay = document.querySelector('#dashboardDisplay');

statisticsNav.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(document.getElementById(`${e.target.id}`));
  console.log(e.target.id);
  dashboardDisplay.classList.add(`hidden`);
  appContainer.classList.remove(`hidden`);
  fetch('/api/v1/dashboard')
    .then(res => res)
    .then(data => console.log(data));
});

dashboardNav.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target.id);
  dashboardDisplay.classList.remove(`hidden`);
  appContainer.classList.add('hidden');
});
