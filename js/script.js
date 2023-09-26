

/*/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

console.log(data);

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const itemsPerPage = 9;
//set the amount of students that will display per page

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = (page * itemsPerPage) - 1;
  const studentUL = document.querySelector('.student-list');
  studentUL.innerHTML = '';
  //clear existing

  //iterate over student data
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i <= endIndex) {
      const student = list[i];
      const studentItem = `
       <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
           <h3>${student.name.first} ${student.name.last}</h3>
           <span class="email">${student.email}</span>
         </div>
         <div class="joined-details">
           <span class="date">joined ${student.registered.date}</span>
         </div>
       </li>`;
      studentUL.insertAdjacentHTML('beforeend', studentItem);
    }
  }

}
//append 
/*
Create the `addPagination` function
// This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {

  const numOfPages = Math.ceil(list.length / itemsPerPage);
  const buttonUL = document.querySelector('.link-list');
  buttonUL.innerHTML = ``;

  for (let i = 1; i <= numOfPages; i++) {
    const button = `
       <li>
         <button type="button">${i}</button>
       </li>`;
    buttonUL.insertAdjacentHTML('beforeend', button);
    buttonUL.querySelector("button").classList.add("active");
  }

  buttonUL.addEventListener('click', (e) => {
    const activeBtn = buttonUL.querySelector(".active");
    const clickedBtn = e.target;

    if (clickedBtn.nodeName === 'BUTTON') {
      const page = parseInt(clickedBtn.textContent);
      activeBtn.className = '';
      clickedBtn.className = 'active';
      showPage(data, page);
    }
  });
}

// Call functions
showPage(data, 1);
addPagination(data)