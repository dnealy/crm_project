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
  appContainer.classList.add('flex');
  fetch('http://192.168.18.41:3000/api/v1/weddings')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      appContainer.innerHTML = data
        .map(wedding => {
          return `
                    <div id=${wedding._id} class=" w-[200px] bg-slate-200 flex flex-col space-y-4">
                      <h1>${wedding.name}</h1>
                      <p>${wedding.date}</p>
                      <p>${wedding.email}</p>
                      <p>${wedding.venue}</p>
                      <p>${wedding.decoration}</p>
                      <p>${wedding.photographer}</p>
                      <p>${wedding.videographer}</p>
                    
                    </div>
        `;
        })
        .join(' ');
    })
    .catch(err => console.log(err));
});

dashboardNav.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target.id);
  dashboardDisplay.classList.remove(`hidden`);
  appContainer.classList.add('hidden');
});
