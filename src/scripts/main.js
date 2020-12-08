const attendanceContainerEle = document.querySelector('.attendance-container');
const addName = attendanceContainerEle.querySelector('button');
const nameList = attendanceContainerEle.querySelector('ul');

// === ADD SCRIPT FOR ADDING NAMES HERE === 
addName.addEventListener('click', (event)=> {
  nameList.textContent = "";
  nameList.insertAdjacentHTML('afterbegin', 
  `<li> Abhijeet </li>
   <li> Navneet </li>
   <li> Amanda </li>`)
})